// Generated from spec/reports.json by scripts/generate.ts. Do not edit.
export interface paths {
    "/objects/reports/stored-report": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List stored reports
         * @description Returns a collection with a key, ID, and link for each stored report. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-reports-stored-report"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/reports/stored-report/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the stored report
                 * @example 124
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a stored report
         * @description Returns detailed information for a specified stored report.
         */
        get: operations["get-reports-stored-report-key"];
        put?: never;
        post?: never;
        /**
         * Delete a stored report
         * @description Deletes a stored report.
         */
        delete: operations["delete-reports-stored-report-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/reports/stored-report-error-record": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List stored report error records
         * @description Returns a collection with a key, ID, and link for each stored report error record. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-reports-stored-report-error-record"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/reports/stored-report-error-record/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the stored report error record.
                 * @example 2
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a stored report error record
         * @description Returns detailed information for a specified stored report error record.
         */
        get: operations["get-reports-stored-report-error-record-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/reports/interactive-custom-report": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List interactive custom reports
         * @description Returns a collection with a key, ID, and link for each interactive custom report. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-reports-interactive-custom-report"];
        put?: never;
        /**
         * Create an interactive custom report
         * @description Creates a new interactive custom report.
         */
        post: operations["create-reports-interactive-custom-report"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/reports/interactive-custom-report/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the interactive custom report.
                 * @example 24
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an interactive custom report
         * @description Returns detailed information for a specified interactive custom report.
         */
        get: operations["get-reports-interactive-custom-report-key"];
        put?: never;
        post?: never;
        /**
         * Delete an interactive custom report
         * @description Deletes an interactive custom report.
         */
        delete: operations["delete-reports-interactive-custom-report-key"];
        options?: never;
        head?: never;
        /**
         * Update an interactive custom report
         * @description Updates an existing interactive custom report by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-reports-interactive-custom-report-key"];
        trace?: never;
    };
    "/services/reports/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Report status
         * @description Retrieve status for a specified report job.
         */
        get: operations["get-services-report-status"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/reports/download": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Download a report
         * @description Download a report stored in Intacct.
         */
        get: operations["report-download"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/reports/stored-reports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Retrieve a stored report
         * @description Retrieve a stored report in different format or location.
         */
        post: operations["post-services-stored-reports"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/reports/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cancel a report
         * @description Cancel a queued report. The `status` of the report will change from `submitted` to `canceled`. In-progress reports cannot be canceled.
         */
        post: operations["post-services-reports-cancel"];
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
        /** @description Stored reports associated with the specified user. */
        "objects.reports.stored-report": {
            /**
             * @description System-assigned unique key for the stored report.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the stored report. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the stored report.
             * @example /objects/core/stored-report/23
             */
            readonly href?: string;
            /**
             * @description Report type.
             * @example gl_glrep
             */
            reportType?: string;
            /**
             * @description Report title.
             * @example General Ledger Report
             */
            reportTitle?: string;
            /**
             * @description The source module associated with the stored report.
             * @example 2.GL
             */
            readonly moduleKey?: string;
            /** @description Details of the report output stored in Intacct. */
            readonly localStore?: {
                /** @description HTML output for the report. */
                html?: {
                    /**
                     * @description Status of the HTML output for the report.
                     * @example pending
                     * @enum {string|null}
                     */
                    readonly status?: "pending" | "success" | "error" | "canceled" | "notAllowed" | null;
                };
                /** @description PDF output for the report. */
                pdf?: {
                    /**
                     * @description Status of the PDF output for the report.
                     * @example pending
                     * @enum {string|null}
                     */
                    readonly status?: "pending" | "success" | "error" | "canceled" | "notAllowed" | null;
                };
                /** @description CSV output for the report. */
                csv?: {
                    /**
                     * @description Status of the CSV output for the report.
                     * @example pending
                     * @enum {string|null}
                     */
                    readonly status?: "pending" | "success" | "error" | "canceled" | "notAllowed" | null;
                };
                /** @description Excel output for the report. */
                excel?: {
                    /**
                     * @description Status of the Excel output for the report.
                     * @example pending
                     * @enum {string|null}
                     */
                    readonly status?: "pending" | "success" | "error" | "canceled" | "notAllowed" | null;
                };
                /** @description Text output for the report. */
                text?: {
                    /**
                     * @description Status of the Text output for the report.
                     * @example pending
                     * @enum {string|null}
                     */
                    readonly status?: "pending" | "success" | "error" | "canceled" | "notAllowed" | null;
                };
                /** @description FEC output for the report. */
                fec?: {
                    /**
                     * @description Status of the Text output for the report.
                     * @example pending
                     * @enum {string|null}
                     */
                    readonly status?: "pending" | "success" | "error" | "canceled" | "notAllowed" | null;
                };
                /** @description ZIP output for the report. */
                zip?: {
                    /**
                     * @description Status of the ZIP output for the report.
                     * @example pending
                     * @enum {string|null}
                     */
                    readonly status?: "pending" | "success" | "error" | "canceled" | "notAllowed" | null;
                };
            };
            /** @description Status for the delivery of the stored report to the cloud. */
            readonly cloudStore?: {
                /**
                 * @description Status for the delivery of the stored report to the cloud.
                 * @example pending
                 * @enum {string|null}
                 */
                readonly status?: "pending" | "success" | "error" | "canceled" | "notAllowed" | null;
            };
            /** @description The user associated with the stored report. */
            user?: {
                /**
                 * @description System-assigned key for the user.
                 * @example 21
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the user.
                 * @example intacct
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/21
                 */
                readonly href?: string;
            };
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
            };
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
        /** @description Report store error log. */
        "objects.reports.stored-report-error-record": {
            /**
             * @description Unique identifier for the stored report error record. This value is the same as the `key` for this object.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description System-assigned key for the stored report error record.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description URL endpoint for the stored report error record.
             * @example /objects/reports/stored-report-error-record/1
             */
            readonly href?: string;
            /**
             * @description Sage Intacct code for the error.
             * @example GL-2000
             */
            errorCode?: string;
            /**
             * @description Description or details of the error.
             * @example Please select a suitable filter
             */
            errorDescription?: string;
            /**
             * @description Report type.
             * @example _pdf
             */
            reportType?: string;
            /**
             * Format: date-time
             * @description Date and time the stored report error record was created.
             * @example 2024-01-23T11:28:12Z
             */
            readonly createdDateTime?: string;
            /** @description Stored report this error is associated with. */
            storedReport?: {
                /**
                 * @description Key for the stored report.
                 * @example 22
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the stored report.
                 * @example 22
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the stored report.
                 * @example /objects/reports/stored-report/22
                 */
                readonly href?: string;
            };
        };
        /** @description Interactive custom reports enable you to build reports across a wide range of reporting areas. */
        "objects.reports.interactive-custom-report": {
            /**
             * @description System-assigned key for the interactive custom report.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the interactive custom report. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the interactive custom report.
             * @example /objects/reports/interactive-custom-report/23
             */
            readonly href?: string;
            /**
             * @description The location where the report is stored.
             * @example shared/Traders/Contracts Expenses
             */
            readonly reportPath?: string;
            /**
             * @description Name for the interactive custom report.
             * @example GL Detail with PO No
             */
            name?: string;
            /**
             * @description Specifies whether the report is created based on an existing report.
             * @default true
             * @example true
             */
            createFromExistingReport?: boolean;
            /**
             * @description The name of an existing report the report is based on. Used when `createFromExistingReport` is set to `true`.
             * @example R310-N1
             */
            existingReportName?: string | null;
            /**
             * @description The module or reporting area the report is associated with.
             * @default accountsPayable
             * @example accountsPayable
             * @enum {string}
             */
            moduleName?: "generalLedger" | "accountsPayable" | "accountsReceivable" | "cashManagement" | "expenses" | "inventoryControl" | "orderEntry" | "purchasing" | "projects" | "contracts" | "construction" | "taxes" | "saasMetrics" | "constructionPayroll" | "realEstate" | "consolidation" | "fixedAssets" | "time" | "company";
            /**
             * @description Indicates whether the report is included in the UI menu.
             * @default false
             * @example false
             */
            addReportToMenu?: boolean;
            /**
             * @description The type for the report.
             * @default interactiveCustomReportWriter
             * @example interactiveCustomReportWriter
             * @enum {string}
             */
            reportType?: "interactiveCustomReportWriter" | "interactiveVisualExplorer";
            /**
             * @description Indicates whether the report belongs to the [ICRW Reports Library](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Report_libraries).
             * @default false
             * @example false
             * @enum {string}
             */
            fromLibrary?: true | false;
            reportingAreas?: components["schemas"]["reporting-areas"];
            /** @description GL report audience for the interactive custom report. */
            glReportAudience?: {
                /**
                 * @description System-assigned key for the GL report audience.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Unique identifier for the GL report audience.
                 * @example 23
                 */
                id?: string;
                /**
                 * @description Name for the GL report audience.
                 * @example RA
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the GL report audience.
                 * @example /objects/general-ledger/report-audience/23
                 */
                readonly href?: string;
            };
            /** @description GL report type for the interactive custom report. */
            glReportType?: {
                /**
                 * @description System-assigned key for the GL report type.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Unique identifier for the GL report type.
                 * @example 23
                 */
                id?: string;
                /**
                 * @description Name for the GL report type.
                 * @example RT
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the GL report type.
                 * @example /objects/general-ledger/report-type/23
                 */
                readonly href?: string;
            };
            /**
             * @description Indicates whether standard periods are included in the report.
             * @default false
             * @example false
             */
            isStandardPeriodIncluded?: boolean;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s2"];
        };
        "reports-interactive-custom-reportRequiredProperties": Record<string, never>;
        /** @description Report status response. */
        "reports-status-response": {
            /**
             * @description report ID
             * @example 1
             */
            readonly reportId?: string;
            /**
             * @description Report status.
             * @example completed
             * @enum {string}
             */
            readonly status?: "pending" | "completed" | "failed" | "canceled";
            /**
             * @description Name for the report.
             * @example Report 1
             */
            readonly name?: string | null;
            /**
             * @description Format for the report output.
             * @example pdf
             * @enum {string}
             */
            readonly outputType?: "html" | "pdf" | "csv" | "excel" | "text" | "fec" | "zip";
            /**
             * @description Location where the report output is stored.
             * @example intacct
             * @enum {string}
             */
            readonly outputLocation?: "intacct" | "cloud";
            /** @description Cloud storage details, when `outputLocation` is set to `cloud`. */
            cloudStore?: {
                /**
                 * @description Cloud store target.
                 * @example s3
                 */
                readonly target?: string | null;
                /**
                 * @description Cloud store path.
                 * @example /
                 */
                readonly path?: string | null;
            };
            /**
             * @description URL endpoint for the report download, when `outputLocation` is set to `intacct`.
             * @example /services/reports/download?reportId=1&outputType=pdf
             */
            readonly downloadURL?: string | null;
            /**
             * @description URL endpoint for the report status.
             * @example /services/reports/status?reportId=1&outputType=pdf&outputLocation=intacct
             */
            readonly href?: string | null;
        };
        /** Format: outbound-binary */
        "outbound-binary": string;
        /** @description Stored reports definition. */
        "services.reports.stored-reports": {
            /**
             * @description Unique identifier for the stored report.
             * @example 1
             */
            reportId: string;
            /**
             * @description Format for the report output.
             * @example html
             * @enum {string}
             */
            outputType: "html" | "pdf" | "csv" | "excel" | "text" | "fec" | "zip";
            /**
             * @description Location where the report is stored.
             * @example intacct
             * @enum {string}
             */
            outputLocation: "intacct" | "cloud";
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
        /** @description Report status response for cancel requests. */
        "services.report.status-canceled": {
            /**
             * @description Unique identifier for the report.
             * @example 1
             */
            reportId?: string;
            /**
             * @description Status of the report job.
             * @example canceled
             * @enum {string}
             */
            status?: "failed" | "canceled";
            /**
             * @description Format for the report output.
             * @example pdf
             * @enum {string}
             */
            readonly outputType?: "html" | "pdf" | "csv" | "excel" | "text" | "fec" | "zip";
            /**
             * @description Location where the report output is stored.
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
         * @description Reporting areas.
         * @example [
         *       "apBills"
         *     ]
         */
        "reporting-areas": ("apAdjustments" | "apBills" | "apPaymentDetail" | "apPayments" | "apPaymentsLegacy" | "apRetainageRelease" | "apTransactions" | "arAdjustments" | "arInvoices" | "arPaymentDetail" | "arPayments" | "arRetainageRelease" | "arTransactions" | "assignment" | "assets" | "bankDeposits" | "bankReconciliationMatch" | "buildKits" | "chargeCard" | "changeRequests" | "checklist" | "constructionReporting" | "contractExpense" | "contractMEAAllocationDetail" | "contractMEABundle" | "contractUsage" | "contractBillingSchedules" | "contractBillingTemplates" | "contractExpenseSchedules" | "contractRevenueSchedules" | "contractRevenueTemplates" | "contractSubledgerLinks" | "contracts" | "costing" | "customer" | "department" | "depreciationSchedule" | "depreciationScheduleDetail" | "dropShipHistory" | "employeeExpense" | "employees" | "glAccount" | "glAccountGroup" | "glBudget" | "glBudgetVsActuals" | "glDetail" | "glDocumentDetail" | "glDynamicAllocations" | "glEntry" | "glTransaction" | "interEntityTransactions" | "inventory" | "inventoryDocumentEntryTracking" | "item" | "lienWaiverDetail" | "location" | "orderEntry" | "orderEntryDocumentEntryTracking" | "orderEntrySubtotals" | "payrollReportCheck" | "payrollReportCheckSummary" | "payrollReportGrossPay" | "payrollReportPTOActivity" | "payrollReportPayModifier" | "payrollReportTax" | "payrollReportTaxSetup" | "payrollReportTimecard" | "payrollReportTimecardSummary" | "projectChangeOrders" | "projectContract" | "projectContractBillingDetail" | "projectContractBillingSummary" | "projectContractLineDetail" | "projectContractRateTableAPEntry" | "projectContractRateTableCreditCardEntry" | "projectContractRateTableEmployeeExpenseEntry" | "projectContractRateTableGLEntry" | "projectContractRateTablePurchaseOrderEntry" | "projectContractRateTableTimesheetEntry" | "projectDetail" | "projectEstimates" | "projectSummaryBillingDetail" | "projects" | "projectsTransactions" | "purchaseDocumentEntryTracking" | "purchaseOrder" | "recurringOrderEntry" | "revenueRecognitionSchedule" | "saasMetrics" | "tasks" | "taskResources" | "timesheets" | "vatGSTTax" | "vatGSTTaxSubmissions" | "vendor" | "vendorCompliance" | "wellsFargoPaymentManager" | "wipSchedule" | "wipScheduleProject")[];
        /**
         * @description Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.
         * @default active
         * @example active
         * @enum {string}
         */
        status: "active" | "inactive";
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
    "list-reports-stored-report": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-reports-stored-report-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the stored report
                 * @example 124
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.reports.stored-report"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-reports-stored-report-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the stored report
                 * @example 124
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
    "list-reports-stored-report-error-record": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-reports-stored-report-error-record-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the stored report error record.
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
                        "ia::result"?: components["schemas"]["objects.reports.stored-report-error-record"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-reports-interactive-custom-report": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-reports-interactive-custom-report": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Interactive Custom Report to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.reports.interactive-custom-report"] & components["schemas"]["reports-interactive-custom-reportRequiredProperties"];
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
    "get-reports-interactive-custom-report-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the interactive custom report.
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
                        "ia::result"?: components["schemas"]["objects.reports.interactive-custom-report"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-reports-interactive-custom-report-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the interactive custom report.
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
    "update-reports-interactive-custom-report-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the interactive custom report.
                 * @example 24
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.reports.interactive-custom-report"] & {
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
    "get-services-report-status": {
        parameters: {
            query: {
                /**
                 * @description Name for the report.
                 * @example 1
                 */
                reportId: string;
                /**
                 * @description Format for the report output.
                 * @example pdf
                 */
                outputType: "html" | "pdf" | "csv" | "excel" | "text" | "fec" | "zip";
                /**
                 * @description Location where the report output is stored.
                 * @example intacct
                 */
                outputLocation: "intacct" | "cloud";
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
                        "ia::result"?: components["schemas"]["reports-status-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            /** @description See Other */
            303: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["reports-status-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "report-download": {
        parameters: {
            query: {
                /**
                 * @description Unique identifier for the report.
                 * @example 1
                 */
                reportId: string;
                /**
                 * @description Format for the report output.
                 * @example pdf
                 */
                outputType: "html" | "pdf" | "csv" | "excel" | "text" | "fec" | "zip";
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
                    "application/pdf": components["schemas"]["outbound-binary"];
                    "application/octet-stream": components["schemas"]["outbound-binary"];
                    "application/vnd.ms-excel": components["schemas"]["outbound-binary"];
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": components["schemas"]["outbound-binary"];
                    "application/zip": components["schemas"]["outbound-binary"];
                    "text/html": components["schemas"]["outbound-binary"];
                    "text/plain": components["schemas"]["outbound-binary"];
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "post-services-stored-reports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Retrieve a report in a new output type. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["services.reports.stored-reports"];
            };
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
    "post-services-reports-cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Cancel a report (only queued reports can be canceled). */
        requestBody: {
            content: {
                "application/json": components["schemas"]["services.reports.stored-reports"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["services.report.status-canceled"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
}

// Generated from spec/expenses.json by scripts/generate.ts. Do not edit.
import type { components, operations } from "./types.js";
import { action, defineApplication, group, object, parameterizedObject, service, shape, singleton } from "../../core/define.js";
import type { RequestBody, ResponseResult } from "../../core/define.js";

export type { components, operations };

/** expenses/electronic-receipt */
export type ElectronicReceipt = components["schemas"]["objects.expenses.electronic-receipt"];
export type ElectronicReceiptCreate = RequestBody<operations["post-expenses-electronic-receipt"]>;
export type ElectronicReceiptUpdate = RequestBody<operations["patch-expenses-electronic-receipt-key"]>;
/** expenses/electronic-receipt-line */
export type ElectronicReceiptLine = components["schemas"]["objects.expenses.electronic-receipt-line"];
/** expenses/employee-expense */
export type EmployeeExpense = components["schemas"]["objects.expenses.employee-expense"];
export type EmployeeExpenseCreate = RequestBody<operations["create-expenses-employee-expense"]>;
export type EmployeeExpenseUpdate = RequestBody<operations["update-expenses-employee-expense-key"]>;
/** expenses/employee-expense-adjustment */
export type EmployeeExpenseAdjustment = components["schemas"]["objects.expenses.employee-expense-adjustment"];
export type EmployeeExpenseAdjustmentCreate = RequestBody<operations["create-expenses-employee-expense-adjustment"]>;
export type EmployeeExpenseAdjustmentUpdate = RequestBody<operations["update-expenses-employee-expense-adjustment-key"]>;
/** expenses/employee-expense-adjustment-line */
export type EmployeeExpenseAdjustmentLine = components["schemas"]["objects.expenses.employee-expense-adjustment-line"];
export type EmployeeExpenseAdjustmentLineCreate = RequestBody<operations["create-expenses-employee-expense-adjustment-line"]>;
export type EmployeeExpenseAdjustmentLineUpdate = RequestBody<operations["update-expenses-employee-expense-adjustment-line-key"]>;
/** expenses/employee-expense-approval-record */
export type EmployeeExpenseApprovalRecord = components["schemas"]["objects.expenses.employee-expense-approval-record"];
/** expenses/employee-expense-line */
export type EmployeeExpenseLine = components["schemas"]["objects.expenses.employee-expense-line"];
export type EmployeeExpenseLineCreate = RequestBody<operations["create-expenses-employee-expense-line"]>;
export type EmployeeExpenseLineUpdate = RequestBody<operations["update-expenses-employee-expense-line-key"]>;
/** expenses/employee-expense-payment-type */
export type EmployeeExpensePaymentType = components["schemas"]["objects.expenses.employee-expense-payment-type"];
export type EmployeeExpensePaymentTypeCreate = RequestBody<operations["create-expenses-employee-expense-payment-type"]>;
export type EmployeeExpensePaymentTypeUpdate = RequestBody<operations["update-expenses-employee-expense-payment-type-key"]>;
/** expenses/employee-expense-summary */
export type EmployeeExpenseSummary = components["schemas"]["objects.expenses.employee-expense-summary"];
export type EmployeeExpenseSummaryCreate = RequestBody<operations["create-expenses-employee-expense-summary"]>;
export type EmployeeExpenseSummaryUpdate = RequestBody<operations["update-expenses-employee-expense-summary-key"]>;
/** expenses/employee-expense-type */
export type EmployeeExpenseType = components["schemas"]["objects.expenses.employee-expense-type"];
export type EmployeeExpenseTypeCreate = RequestBody<operations["create-expenses-employee-expense-type"]>;
export type EmployeeExpenseTypeUpdate = RequestBody<operations["update-expenses-employee-expense-type-key"]>;
/** expenses/expense-to-approve */
export type ExpenseToApprove = components["schemas"]["objects.expenses.expense-to-approve"];
/** expenses/expense-to-approve-line */
export type ExpenseToApproveLine = components["schemas"]["objects.expenses.expense-to-approve-line"];
/** expenses/unit-rate */
export type UnitRate = components["schemas"]["objects.expenses.unit-rate"];

export const expenses = defineApplication({
  electronicReceipt: object(shape<{ record: ElectronicReceipt; create: ElectronicReceiptCreate; update: ElectronicReceiptUpdate }>(), "expenses/electronic-receipt", ["create","delete","get","update"]),
  electronicReceiptLine: object(shape<{ record: ElectronicReceiptLine }>(), "expenses/electronic-receipt-line", ["get"]),
  employeeExpense: object(shape<{ record: EmployeeExpense; create: EmployeeExpenseCreate; update: EmployeeExpenseUpdate }>(), "expenses/employee-expense", ["create","delete","get","update"], {
    recall: action<RequestBody<operations["recall-expenses-employee-expense"]>, ResponseResult<operations["recall-expenses-employee-expense"]>>("recall"),
    reverse: action<RequestBody<operations["reverse-expenses-employee-expense"]>, ResponseResult<operations["reverse-expenses-employee-expense"]>>("reverse"),
  }),
  employeeExpenseAdjustment: object(shape<{ record: EmployeeExpenseAdjustment; create: EmployeeExpenseAdjustmentCreate; update: EmployeeExpenseAdjustmentUpdate }>(), "expenses/employee-expense-adjustment", ["create","delete","get","update"]),
  employeeExpenseAdjustmentLine: object(shape<{ record: EmployeeExpenseAdjustmentLine; create: EmployeeExpenseAdjustmentLineCreate; update: EmployeeExpenseAdjustmentLineUpdate }>(), "expenses/employee-expense-adjustment-line", ["create","delete","get","update"]),
  employeeExpenseApprovalRecord: object(shape<{ record: EmployeeExpenseApprovalRecord }>(), "expenses/employee-expense-approval-record", ["get"]),
  employeeExpenseLine: object(shape<{ record: EmployeeExpenseLine; create: EmployeeExpenseLineCreate; update: EmployeeExpenseLineUpdate }>(), "expenses/employee-expense-line", ["create","delete","get","update"]),
  employeeExpensePaymentType: object(shape<{ record: EmployeeExpensePaymentType; create: EmployeeExpensePaymentTypeCreate; update: EmployeeExpensePaymentTypeUpdate }>(), "expenses/employee-expense-payment-type", ["create","delete","get","update"]),
  employeeExpenseSummary: object(shape<{ record: EmployeeExpenseSummary; create: EmployeeExpenseSummaryCreate; update: EmployeeExpenseSummaryUpdate }>(), "expenses/employee-expense-summary", ["create","delete","get","update"]),
  employeeExpenseType: object(shape<{ record: EmployeeExpenseType; create: EmployeeExpenseTypeCreate; update: EmployeeExpenseTypeUpdate }>(), "expenses/employee-expense-type", ["create","delete","get","update"]),
  expenseToApprove: object(shape<{ record: ExpenseToApprove }>(), "expenses/expense-to-approve", ["get"]),
  expenseToApproveLine: object(shape<{ record: ExpenseToApproveLine }>(), "expenses/expense-to-approve-line", ["get"]),
  unitRate: object(shape<{ record: UnitRate }>(), "expenses/unit-rate", ["get"]),
});

export default expenses;

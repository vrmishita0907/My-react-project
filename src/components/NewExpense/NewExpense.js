import React from "react";
import './NewExpense.css';
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
    // console.log("hello")
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log("result:", expenseData)
        props.onAddExpense(expenseData);
    }
    return (
        <div className="new-expense">
            <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />

        </div>
    )
}

export default NewExpense;
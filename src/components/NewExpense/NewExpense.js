import React, { useState } from "react";
import './NewExpense.css';
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
    // console.log("hello")
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log("result:", expenseData)
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}
            {isEditing && <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel ={stopEditingHandler}/>}

        </div>
    )
}

export default NewExpense;
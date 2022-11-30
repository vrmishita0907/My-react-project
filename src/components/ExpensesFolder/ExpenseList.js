import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";


const ExpenseList = props => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback"> No Expenses Found. </h2>
    }

    if (props.items.length > 0) {
        return <ul className="expenses-list">
            {props.items.map((expense) =>
            (<ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />))}
        </ul>
    }
};


export default ExpenseList;
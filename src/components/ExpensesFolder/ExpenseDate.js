import React from "react";
import "./ExpenseDate.css";


const ExpenseDate = (props) =>{
    const day = props.date.toLocaleString('en-GB', {day:'2-digit'})
    const month = props.date.toLocaleString('en-GB', {month:'long'})
    const year = props.date.toLocaleString('en-GB', {year:'numeric'});

    return(
        <div className="expense-date">
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
    </div>
    )
}
export default ExpenseDate ;
import React, { useState } from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";


const Expenses = (props) => {

 const[filteredYear, setFilterYear] = useState('2020')
   const filterChangeHandler = selectedYear => {
    // console.log("expense.js", selectedYear);
    setFilterYear(selectedYear)
   }
   
    return (
        <div>
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter = {filterChangeHandler}/>
            {props.items.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>))}
        </Card>
        </div>
    )
}
export default Expenses;
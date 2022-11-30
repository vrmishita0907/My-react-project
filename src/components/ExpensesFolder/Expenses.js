import React, { useState } from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";


const Expenses = (props) => {

    const [filteredYear, setFilterYear] = useState('2020')
    const filterChangeHandler = selectedYear => {
        // console.log("expense.js", selectedYear);
        setFilterYear(selectedYear)
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.toLocaleString('en-GB', { year: 'numeric' }) === filteredYear;
    });

    return (
        <div>

            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseChart expense={filteredExpenses}/>
                <ExpenseList items={filteredExpenses} />
            </Card>

        </div>
    )
}
export default Expenses;
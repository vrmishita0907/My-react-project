import React ,{useState} from 'react';
import './App.css';
import Expenses from './components/ExpensesFolder/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const Dummy_Expense = [
    {
      id: 'e1',
      title: 'New Computer',
      amount: 57550,
      date: new Date(2023, 1, 15),
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 12200,
      date: new Date(2022, 5, 2),
    },
    {
      id: 'e3',
      title: 'Dinning Table',
      amount: 17900,
      date: new Date(2020, 6, 21),
    },
    {
      id: 'e4',
      title: 'Bicycle',
      amount: 13500,
      date: new Date(2021, 9, 30),
    },

  ];

  const App = () => {
   const [expenses, setExpenses] = useState(Dummy_Expense)  
   
   const addExpenseHandler = expense => {
     setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
     });
    };
  
  return (
      //  React.createElement(
      //   'div',
      //   {},
      //   React.createElement('h2',{},"Stored!"),
      //   React.createElement(Expenses, {items : expenses})
      //  )


    
      <div>
        <NewExpense onAddExpense ={addExpenseHandler}/>
        <Expenses items={expenses} />
      </div>
    
  );
}

export default App;

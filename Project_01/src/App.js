import React,{useState} from 'react';

import Expenses from "./components/Expense/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

let DUMMY_EXPENSES = [
    {
        id:'e1',
        date: new Date(2021, 5, 7),
        title: "Car Insurance",
        price: 200
    },
    {
        id:'e2',
        date: new Date(2021, 6, 7),
        title: "Balloons",
        price: 10
    },
    {
        id:'e3',
        date: new Date(2021, 7, 7),
        title: "PS5",
        price: 700
    },
    {
        id:'e4',
        date: new Date(2021, 8, 7),
        title: "Food",
        price: 50
    }
];

const App = () => {

    const [expenses, setExpense] = useState(DUMMY_EXPENSES);

    const addExpenseData = (expenseData) => {
        console.log(expenseData);
        console.log(expenseData.title);
        console.log(expenseData.date);
        console.log(expenseData.amount);
        const updatedExpense = [expenseData, ...expenses];
        console.log(updatedExpense);
        setExpense(updatedExpense);
    };

    return (
        <div>
            <NewExpense onAddExpenseData={addExpenseData}></NewExpense>
            <Expenses item={expenses}/>
        </div>
    );
}

export default App;
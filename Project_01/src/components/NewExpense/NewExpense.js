import React from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

let NewExpense = (props) =>{

    const saveExpenseDataHandler = (enteredExpenseData) =>{    
        const newExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpenseData(newExpenseData);
    }


    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    );
}

export default NewExpense;
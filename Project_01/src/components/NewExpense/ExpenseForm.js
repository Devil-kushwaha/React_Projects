import React, { useState } from "react";

import './ExpenseForm.css';

let ExpenseForm = (props) => {

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    const changeHandlerTitle = (event) =>{
        setEnteredTitle(event.target.value);
    }

    const changeHandlerAmount = (event) =>{
        setEnteredAmount(event.target.value);
    }

    const changeHandlerDate = (event) =>{
        setEnteredDate(event.target.value);
    }


    const submitHandler = (event) =>{
        event.preventDefault();
        let newExpenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onSaveExpenseData(newExpenseData);
    }
        
    return(

        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input value={enteredTitle} type="text" onChange={changeHandlerTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input value={enteredAmount} type="number" min="0.01" step="0.01" onChange={changeHandlerAmount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input value={enteredDate} type="date" onChange={changeHandlerDate}/>
                </div>
            </div>
            <div>
                <button>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
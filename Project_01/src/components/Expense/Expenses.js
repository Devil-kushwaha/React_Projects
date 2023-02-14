import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';

let Expenses = (props) =>{

    return(
        <Card className='Expenses'>
            {
                props.item.map((expense) => (
                    <ExpenseItem 
                    date  = {expense.date}
                    title = {expense.title}
                    amount = {expense.amount}/>        
                ))
            }
        </Card>
        
    );
}

export default Expenses;
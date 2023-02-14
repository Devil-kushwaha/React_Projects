import React from 'react';
import './ExpenseDate.css'

let expenseDate = (props) => {
    const year  = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US',{month : 'short'});
    const date  = props.date.toLocaleString('en-US', {day : '2-digit'});

    return(
        <div className='expense-item-date'>
            <div className='expense-item-date__month'>{month}</div>
            <div className='expense-item-date__date'>{date} </div>
            <div className='expense-item-date__year'>{year} </div>
        </div>
    );
}

export default expenseDate;
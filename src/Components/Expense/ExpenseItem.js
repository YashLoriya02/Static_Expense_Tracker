import React from 'react'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2 className='expense-item__h2' style={{ fontSize: "25px", fontFamily: "sans-serif" }}>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem
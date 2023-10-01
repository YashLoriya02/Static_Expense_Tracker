import React, { useState } from 'react'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
    }
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
    }
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        
        props.onSaveExpenseData(expenseData)
        setEnteredAmount("")
        setEnteredTitle("")
        setEnteredDate("")
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label className='new-expense__label'>
                            Title
                        </label>
                        <input
                            type="text"
                            value={enteredTitle}
                            onChange={titleChangeHandler}
                            placeholder='Enter Title'
                        />
                    </div>
                    <div className="new-expense__control">
                        <label className='new-expense__label'>
                            Amount
                        </label>
                        <input
                            type="text"
                            value={enteredAmount}
                            onChange={amountChangeHandler}
                            placeholder='Enter Price'
                        />
                    </div>
                    <div className="new-expense__control">
                        <label className='new-expense__label'>
                            Date
                        </label>
                        <input
                            type="date"
                            value={enteredDate}
                            min="2019-01-01"
                            max="2023-12-31"
                            onChange={dateChangeHandler}
                            placeholder='Enter Date'
                        />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button onClick={props.onCancel} className='cancel_newexpense_btn' type="button">
                        Cancel
                    </button>
                    <button className='add_newexpense_btn' type="submit">
                        Add Expense
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm
import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'
import ExpensesChart from './ExpensesChart'


const Expenses = (props) => {
  const [filteredYear, setFilteredyear] = useState("2020")
  const filterHandler = (selectedYear) => {
    setFilteredyear(selectedYear)
  }

  const newExpenseArray = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <div className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterHandler} />

        <ExpensesChart expenses = {newExpenseArray} />

        {newExpenseArray.length === 0 ? <p className='no_expense'>No Expense Found</p> :
          newExpenseArray.map((expense) =>
          (<ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date} />
          )
          )}
      </div>
    </div>
  )
}

export default Expenses

import { useState } from "react";
import Expenses from "./Components/Expense/Expenses";
import NewExpense from "./Components/New-Expense/NewExpense";

const expenses = [
  {
    id : "1" ,
    title : "Washing-Machine",
    amount :"358.77",
    date : new Date(2019 , 6 , 11)
  },
  {
    id : "2",
    title : "Air-Conditioner",
    amount : "632.24",
    date: new Date(2022 , 2 , 17)
  },
  {
    id : "3",
    title : "Gold-Loans",
    amount : "584.68",
    date: new Date(2021 , 3 , 12)
  },
  {
    id : "4",
    title : "Car-Insurance",
    amount : "422.11",
    date: new Date(2020 , 4 , 6)
  }
]

function App() {
  const [expense , setExpense] = useState(expenses)

  const addExpenseHandler = (myExpense) => {
    setExpense( (prevExpenses) => {
      return [myExpense , ...prevExpenses]
    })
  }

  return (
    <>
      <div>
        <h1 style={{color : "white" , textAlign: "center", fontSize : "35px", marginTop : "15px"}}>Expense-Tracker</h1>
        <NewExpense onAddExpense = {addExpenseHandler} />
        <Expenses items={expense} />
      </div>
    </>
  );
}

export default App;
import { useEffect, useState } from "react";
import { Form } from "./components/form"
import { Header } from "./components/header"
import { Resume } from "./components/resume"
import Global from "./style/global"

function App() {
  const data = JSON.parse(localStorage.getItem("Transactions")) ?? [];
  const [ transactionsList, setTransactionsList ] = useState(data)

  const [ income, setIncome ] = useState(0)
  const [ expense, setExpense ] = useState(0)
  const [ total, setTotal ] = useState(0)

  useEffect(() => {
    const amountExpense = transactionsList
      .filter(item => item.expense)
      .map(transaction => Number(transaction.amount))

    const amountIncome = transactionsList
      .filter(item => !item.expense)
      .map(transaction => Number(transaction.amount))

    const expense = amountExpense.reduce((acc, value) => acc + value, 0).toFixed(2);
    const income = amountIncome.reduce((acc, value) => acc + value, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2)

    const isNegative = Number(income) < Number(expense) ? "-" : ""

    setExpense(`R$ ${expense}`)
    setIncome(`R$ ${income}`)
    setTotal(`${isNegative}R$ ${total}`)

  }, [transactionsList])


  const handleAdd = (transaction) => {
    const newTransaction = [...transactionsList, transaction]

    setTransactionsList(newTransaction)

    localStorage.setItem('Transactions', JSON.stringify(newTransaction))    
  }


 return (
  <>
    <Header />
    <Resume 
      expense={expense}
      income={income}
      total={total}
    />
    <Form 
      handleAdd={handleAdd} 
      transactionsList={transactionsList} 
      setTransactionsList={setTransactionsList}/>

    <Global />
  </>

 )
}

export default App

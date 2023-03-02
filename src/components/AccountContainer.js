import React, {useEffect, useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([])
  const [transactionDesc, setTransactionDesc] = useState("")
  
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
    .then((r) => r.json())
    .then(setTransactions)
  }, [])

  function addNewTransaction(newTransaction) {
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTransaction), 
    })
    .then((r) => r.json())
    .then(transaction => setTransactions([...transactions, transaction]))
  }

  return (
    <div>
      <Search handleSearch={setTransactionDesc}/>
      <AddTransactionForm onSubmit={addNewTransaction}/>
      <TransactionsList transactions={transactions
        .filter(transaction => 
        transaction.description.toLowerCase().includes(transactionDesc.toLowerCase()
        ))}/>
    </div>
  );
}

export default AccountContainer;

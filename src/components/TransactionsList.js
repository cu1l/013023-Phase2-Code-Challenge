import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions }) {
  
  transactions.sort((a, b) => (a.category > b.category) ? 1 : -1)
  const transactionTable = transactions.map((transactionObj) => {
    return <Transaction key={transactionObj.id} transactionObj={transactionObj}/>;
  })

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {transactionTable}
      </tbody>
    </table>
  );
}

export default TransactionsList;

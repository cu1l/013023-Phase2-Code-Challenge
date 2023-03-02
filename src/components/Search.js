import React, { useState } from "react";

function Search({ handleSearch }) {
  const [transactionDesc, setTransactionDesc] = useState("")

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={transactionDesc}
        onChange={(e) => {
          console.log("Searching...")
          setTransactionDesc(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;

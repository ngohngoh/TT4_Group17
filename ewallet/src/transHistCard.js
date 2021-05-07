import React from "react";

const TransHistCard = (props) => {
  const transactions = props.transactions.map(({ custID, payeeID, amount }) => {
    return (
      <div key={amount} className="ui cards">
        <div className="card">
          <div className="content">
            <div className="header">${amount}</div>
            <div className="description"> Paid by: {payeeID}</div>
            <div className="description"> Paid to: {custID}</div>
          </div>
        </div>
      </div>
    );
  });

  return <div>{transactions}</div>;
};

export default TransHistCard;

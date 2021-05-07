import React from "react";
import userTransaction from "./api/userTransaction";
import TransHistCard from "./transHistCard";

class TransHist extends React.Component {
  state = { transactions: [] };

  handleClick = () => {
    userTransaction
      .post("/", {
        custID: 17,
        accountKey: "p3dia58c-bmo7-xwsl-9xc5-ky5wjpi26by",
      })
      .then((response) => {
        this.setState({ transactions: response.data });
        console.log(response.data);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>View Transactions</button>
        <br />
        <TransHistCard transactions={this.state.transactions} />
      </div>
    );
  }
}

export default TransHist;

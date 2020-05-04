import React, { Component } from "react";
import {
  getTransactions,
  getCurrentBalance,
} from "./../services/fakeTransactionService";

class Transactions extends Component {
  state = {
    transactions: getTransactions(),
    currentBalance: 0,
  };

  componentDidMount() {
    const transactions = getTransactions();
    console.log("CDM", transactions);
    this.setState({ transactions, currentBalance: getCurrentBalance() });
  }

  render() {
    const { transactions } = this.state;
    console.log("SAJIB", transactions);
    return (
      <div>
        <h1>{`Current Balance: ${this.state.currentBalance}`}</h1>
        <tbody>
          {this.state.transactions.map((t) => (
            <tr>
              <td>{t.description}</td>
              <td>{t.amount}</td>
            </tr>
          ))}
        </tbody>
      </div>
    );
  }
}

export default Transactions;

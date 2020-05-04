import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginForm from "./components/loginForm";
import Transactions from "./components/transactions";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Switch>
            <Route from="/login" component={LoginForm} />
            <Route path="/transactions" component={Transactions} />
            <Redirect from="/" exact to="login" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

import React from 'react';
import AccountView from './AccountView';
import TransactionView from './transactionView';
import Login from './Login';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';


class App extends React.Component {

  state = {isLoggedin: false};

  handleSuccessfulLogin = () => {
    this.setState({isLoggedin: true});
  }

  render() {

    if (this.state.isLoggedin) {
      return <AccountView />;
    }
      return <Login onSuccessLogin={this.handleSuccessfulLogin} /> 
  }
}

export default App;
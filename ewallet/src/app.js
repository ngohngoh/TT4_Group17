import React from 'react';
import AccountView from './AccountView';
import TransactionView from './TransactionView';
import Login from './Login';


class App extends React.Component {
  render() {
    return (
      //<div><AccountView /></div>
      
      <div>
        <Login /> 
        <TransactionView />
      
      </div>
    );
  }
}

export default App;
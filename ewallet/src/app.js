import React from 'react';
import AccountView from './AccountView';
import transactionView from './transactionView';
import Login from './Login';


class App extends React.Component {
  render() {
    return (
      //<div><AccountView /></div>
      
      <div>
        <Login /> 
        <transactionView />
      
      </div>
    );
  }
}

export default App;
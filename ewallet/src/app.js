import React from 'react';
import AccountView from './AccountView';
import TransactionView from './TransactionView';
<<<<<<< Updated upstream
import Login from './Login';

=======
>>>>>>> Stashed changes

class App extends React.Component {
  render() {
    return (
      //<div><AccountView /></div>
<<<<<<< Updated upstream
      
      <div>
        <Login /> 
        <TransactionView />
      
      </div>
=======
      <div><TransactionView /></div>
>>>>>>> Stashed changes
    );
  }
}

export default App;
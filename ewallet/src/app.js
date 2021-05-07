import React from 'react';
import AccountView from './AccountView';
import transactionView from './transactionView';

class App extends React.Component {
  render() {
    return (
      //<div><AccountView /></div>
      <div><transactionView /></div>
    );
  }
}

export default App;
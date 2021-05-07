import React from 'react';
import userAccount from './api/userAccount';
import AccountCard from './AccountCard';

class AccountView extends React.Component {

    state = { accounts : [] };

    handleClick = () => {
        userAccount.post(
            '/', 
            {
                "custID": 17,
                "accountKey": "p3dia58c-bmo7-xwsl-9xc5-ky5wjpi26by"
            }
        )
        .then(response => {
            this.setState({ accounts: response.data })
            console.log(response.data);

        })
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>View your Account</button>
                <br />
                <AccountCard accounts={this.state.accounts} />

            </div>
        )
    }
}

export default AccountView
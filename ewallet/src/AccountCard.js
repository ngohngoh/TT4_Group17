import React from 'react';

const AccountCard = props => {
    const accounts = props.accounts.map(({accountName, accountNumber, availableBal}) => {
        return (
            <div key={accountNumber} className="ui cards">
                <div className="card">
                    <div className="content">
                        <div className="header">{accountName}</div>
                        <div className="description"> Balance amount: {availableBal}</div>

                    </div>

                </div>
            </div>
        )
    });

    return <div>{accounts}</div>;
}


// class AccountCard extends React.Component {
//     render() {

//     }
// }

// class AccountCard extends React.Component {
//     render() {
//         return <div>Accounts I can see</div>;
//     }
// }

export default AccountCard;

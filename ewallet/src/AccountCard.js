import React from 'react';

const AccountCard = props => {
    const accounts = props.accounts.map(({accountName, accountNumber, availableBal}) => {
        return (
            <div key={accountNumber} className="ui cards center">
                <div className="card">
                    <div className="content">
                        <div className="header">{accountName}</div>
                        <div className="description">A/C No. <b>{accountNumber}</b></div>
                        <div className="description"> Balance amount: {availableBal}</div>

                    </div>

                </div>
            </div>
        )
    });

    return <div>
                <div>
                    <h2>Number of accounts:</h2>
                    {accounts.length}
                </div>
                {accounts}
            </div>;
}

export default AccountCard;

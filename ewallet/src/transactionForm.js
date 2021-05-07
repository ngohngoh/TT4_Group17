import React from 'react';

const TransactionForm = props => {
    const transactions = props.transactions.map(({statusCode,message}) => {
        return (
            <div key="message" className="ui cards">
                <div className="card">
                    <div className="content">
                        <div className="header">{statusCode}</div>
                        <div className="header">{message}</div>

                    </div>

                </div>
            </div>
        )
    });

    return <div>{transactions}</div>;
}



export default TransactionForm;

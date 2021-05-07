import React from 'react';

const transactionForm = props => {
    const transactions = props.transactions.map(({statusCode,message}) => {
        return (
            <div key={statusCode} className="ui cards">
                <div className="card">
                    <div className="content">
                        <div className="header">{message}</div>
                        

                    </div>

                </div>
            </div>
        )
    });

    return <div>{transactions}</div>;
}


export default transactionForm;

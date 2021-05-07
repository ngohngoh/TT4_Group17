import React from 'react';
import transaction from './api/transaction';
import transactionForm from './transactionForm';


class transactionView extends React.Component {

    state = { transactions : [] };

    handleClick = () => {
        transaction.post(
            '/', 
            {
                "custID":17,
                "accountKey":"p3dia58c-bmo7-xwsl-9xc5-ky5wjpi26by",
                "payeeID":1,
                "amount": 22,
                "expenseCat": "Food",
                "eGift": false,
                "message": "Breakfast"
            }
        )
        .then(response => {
            this.setState({ transactions: response.data })
            console.log(response.data);

        })
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Add Transaction</button>
                <br />
                <transactionForm transactions={this.state.transactions} />

            </div>
        )
    }
}

export default transactionView
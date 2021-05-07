import React from 'react';
import transaction from './api/transaction';
import TransactionForm from './TransactionForm';


class TransactionView extends React.Component {

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
            
            //this.setState({ transactions: response.data })
            console.log(response.data);

        })
    };
  }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Add Transaction</button>
                <br />
                //<TransactionForm transactions={this.state.transactions} />

  doLogin = async (event) => {
    event.preventDefault();
    const URL = "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add";
    const data = {
        custID:this.state.custID,
        accountKey:this.state.accountKey,
        payeeID:this.state.payeeID,
        amount: this.state.amount,
        expenseCat: this.state.expenseCat,
        eGift: this.state.eGift,
        message: this.state.message,
    };
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'x-api-key': 'PDprxfeN6h773d3G9RvBN2zp6H79R0tjp17Fhd0d'
        },
        body: JSON.stringify(data)
    };

    // fetch(URL, requestOptions)
    //     .then(response => response.json())
    //     .then(data => {
    //         this.setState({
    //             username: '',
    //             password: '',
    //             error: ''
    //         })
    //         console.log(data);
    //         localStorage.setItem("custId", data.custID);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         this.setState({
    //             error: 'Invalid username and password'
    //         }); 
    //     });
    // }

    render() {
        return ( 
          <div>    
            <Container fluid>
            
              <Row style={{marginTop:"20px"}}>
              <Col sm="12" md={{ size: 3, offset: 4 }}>
                <div style={{marginBottom: "10px"}}>
                  
                </div>
                <Form  onSubmit={this.doLogin}>
                  <FormGroup>
                  <h4>Login</h4>
                    <Label for="username"><strong>Username</strong></Label>
                    <Input autoFocus 
                      type="text"
                      name="username" id="username"
                      value={this.state.username}
                      placeholder="Enter Username"
                      autoComplete="username"
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
    
                  <br />
    
                  <FormGroup>
                    <Label for="password"><strong>Password</strong></Label>
                    <Input type="password" 
                      name="password" id="password"
                      value={this.state.password}
                      placeholder="Enter Password"
                      autoComplete="password"
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                  
                  <br />
    
                  <Button type="submit" variant="primary" size="lg" block>
                    Sign In
                  </Button>
                  {
                    this.state.error && (
                      <Alert color="danger">
                        {this.state.error}
                      </Alert>
                    )
                  }
                </Form>
                </Col>
              </Row>
            </Container>
          </div>);
      }
    }
}
    export default Login;
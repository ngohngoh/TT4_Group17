import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Form, Alert, FormGroup, Input, Label, Row, Col } from "reactstrap";
import {Button} from 'react-bootstrap';


class TransactionView extends Component {

  constructor(props) {
    super(props);

    this.state = {
        // custID:17,
        // accountKey:"p3dia58c-bmo7-xwsl-9xc5-ky5wjpi26by",
        payeeID:Int16Array,
        amount: Int32Array,
        expenseCat: "",
        eGift: Boolean,
        message: "",
        error:""
    };
  }

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  AddTransaction = async (event) => {
    event.preventDefault();
    const URL = "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add";
    const data = {
        custID: 17,
        accountKey:"p3dia58c-bmo7-xwsl-9xc5-ky5wjpi26by",
        payeeID: parseInt(this.state.payeeID),
        amount: parseInt(this.state.amount),
        expenseCat: this.state.expenseCat,
        eGift: false,
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

    fetch(URL, requestOptions)
        .then(response => response.json())
        .then(data => {
            this.setState({
                // custID:17,
                // accountKey:"p3dia58c-bmo7-xwsl-9xc5-ky5wjpi26by",
                payeeID:Int16Array,
                amount: Int16Array,
                expenseCat: "",
                eGift: Boolean,
                message: ""
            })
            console.log(data);
            //localStorage.setItem("custId", data.custID);
        })
        .catch(err => {
            console.log(err);
            this.setState({
                error: 'User or Amount'
            }); 
        });
    }

  render() {
    return ( 
      <div>    
        <Container fluid>
        
          <Row style={{marginTop:"20px"}}>
          <Col sm="12" md={{ size: 3, offset: 4 }}>
            <div style={{marginBottom: "10px"}}>
              
            </div>
            <Form  onSubmit={this.AddTransaction}>
              <FormGroup>
              <h1>Transaction</h1>
                <Label for="payeeID"><strong>Payee ID  </strong></Label>
                <Input autoFocus 
                  type="text"
                  name="payeeID" id="payeeID"
                  value={this.state.payeeID}
                  placeholder="Enter payeeID"
                  autoComplete="payeeID"
                  onChange={this.changeHandler}
                />
              </FormGroup>

              <br />

              <FormGroup>
                <Label for="amount"><strong>Amount  </strong></Label>
                <Input type="text" 
                  name="amount" id="amount"
                  value={this.state.amount}
                  placeholder="Enter amount"
                  autoComplete="amount"
                  onChange={this.changeHandler}
                />
              </FormGroup>
              
              <br />

              <FormGroup>
                <Label for="expenseCat"><strong>Expense Catogary  </strong></Label>
                <Input type="text" 
                  name="expenseCat" id="expenseCat"
                  value={this.state.expenseCat}
                  placeholder="Enter Expense Catogary"
                  autoComplete="expenseCat"
                  onChange={this.changeHandler}
                />
              </FormGroup>
              
              <br />

              <FormGroup>
                <Label for="eGift"><strong>eGift  </strong></Label>
                <Input type="checkbox" 
                  name="eGift" id="eGift"
                  value={this.state.eGift}
                  //placeholder="Enter Expense Catogary"
                  autoComplete="eGift"
                  onChange={this.changeHandler}
                />
              </FormGroup>
              
              <br />

              <FormGroup>
                <Label for="message"><strong>Message  </strong></Label>
                <Input type="text" 
                  name="message" id="message"
                  value={this.state.message}
                  placeholder="Enter message"
                  autoComplete="message"
                  onChange={this.changeHandler}
                />
              </FormGroup>
              
              <br />

              <Button type="submit" variant="primary" size="lg" block>
                Confirm Transaction
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

export default TransactionView;
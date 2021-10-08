import React, { Component, useState } from 'react';
import {Form} from "reactstrap";
import {Button} from 'reactstrap';


class Login extends Component{

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:''
    }
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleSubmit(e) {
    return e.preventDefault();
  }


  render () {
    return (
      <div className="Login">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={this.state.email}
              onChange={(e,newValue) => this.setState({email:newValue})}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={this.state.password}
              onChange={(e, newValue) => this.setState({password:newValue})}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!this.validateForm()} onClick = {(e) => this.handleClick(e)} >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}


export default Login;

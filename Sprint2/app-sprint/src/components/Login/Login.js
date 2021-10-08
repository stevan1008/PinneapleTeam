import React, { Component } from 'react';
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function validateForm() {
  return email.length > 0 && password.length > 0;
}

function handleSubmit(event) {
  event.preventDefault();
}

class GestionUsers extends Component{

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:''
    }
  }

  render () {
    return (
      <div className="Login">
        <Form onSubmit={handleSubmit}>
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
          <Button block size="lg" type="submit" disabled={!validateForm()} onClick = {(e) => this.handleClick(e)} >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;

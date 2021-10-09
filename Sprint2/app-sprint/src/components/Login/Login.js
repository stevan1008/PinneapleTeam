import React, { Component, useState } from 'react';
import {FormGroup, Form, Button} from "reactstrap";


class Login extends Component{

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:''
    }

    this.validateForm = this.validateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleSubmit(e) {
    e.preventDefault();
  }


  render () {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup size="lg">
            <label>Email</label>
            <input 
              className = 'form-group'
              type="email"
              value={this.state.email}
              onChange={(e,newValue) => this.setState({email:newValue})}
            />
          </FormGroup>
          <FormGroup size="lg">
            <label>Password</label>
            <input
              className = 'form-group'
              type="password"
              value={this.state.password}
              onChange={(e, newValue) => this.setState({password:newValue})}
            />
          </FormGroup>
          <Button block size="lg" type="submit"  >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

//onClick = {(e) => this.handleClick(e)} 
export default Login;

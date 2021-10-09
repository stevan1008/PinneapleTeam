import React, { Component, useState } from 'react';
import {FormGroup, Form, Button} from "reactstrap";


class Login extends Component{

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
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
              required
              
            />
          </FormGroup>
          <FormGroup size="lg">
            <label>Password</label>
            <input
              className = 'form-group'
              type="password"
              value={this.state.password}
              onChange={(e, newValue) => this.setState({password:newValue})}
              required
            />
          </FormGroup>
          <Button block size="lg" type="submit" color='success' >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

//onClick = {(e) => this.handleClick(e)} 
export default Login;

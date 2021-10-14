import React, { Component, useState } from 'react';
import {FormGroup, Form, Button} from "reactstrap";
import validator from 'validator';

const Login = () => {
  
  const [errorMessage, setErrorMessage] = useState('')
  const [email, setEmail] = useState("");
  const validate = (value) => {
  
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('Is Strong Password')
    } else {
      setErrorMessage('Is Not Strong Password. Need to have at least one CAP, one number and a special character')
    }
  }
  
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div style={{
      marginLeft: '200px',
    }}>
    <div className="Login">
      <pre>
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup size="lg">
               <label>Email</label>
               <input 
              className = 'form-group'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}              
            />
          </FormGroup>
        </form>
        <span>Enter Password: </span><input type="password"
          onChange={(e) => validate(e.target.value)}></input> <br />
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</span>
      </pre>
    </div>
    </div>
  );
}

// class Login extends Component{

//   constructor(props) {
//     super(props);
//     this.state = {
//       email:'',
//       password:''
//     }
    
//     this.setErrorMessage = '';
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
    
//   }


//   handleSubmit(e) {
//     e.preventDefault();
//   }

//   validate_pass = (value) => {
//     if (validator.isStrongPassword(value, {
//       minLength: 8, minLowercase: 1,
//       minUppercase: 1, minNumbers: 1, minSymbols: 1
//     })) {
//       this.setErrorMessage('Is Strong Password')
//     } else {
//       this.setErrorMessage('Is Not Strong Password')
//     }
//   }

//   handleChange(event) {
//     this.setState({email: event.target.email, password: event.target.password})
//   }

//   render () {
//     return (
//       <div className="Login">
//         <form onSubmit={this.handleSubmit}>
//           <FormGroup size="lg">
//             <label>Email</label>
//             <input 
//               className = 'form-group'
//               type="email"
//               //value={this.state.email}
//               onChange={(e,newValue) => this.setState({email:newValue})}
              
//             />
//           </FormGroup>
//           <FormGroup size="lg">
//             <label>Password</label>
//             <input
//               className = 'form-group'
//               type="password"
//               //value={this.state.password}
//               onChange= {(e) => this.validate_pass(this.setState({password:e.target.password}))}
//             />
//           </FormGroup>
//           <Button block size="lg" type="submit" color='success' >
//             Login
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }

//onClick = {(e) => this.handleClick(e)} 
export default Login;

import React, { Component } from 'react';
import axios from 'axios';
const url = `http://192.168.10.123:3000/admin`;
class FormAdmin extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: {
        admin_id:'',
        name:'',
        username:'',
        email: '',
        password: '',
        passwordConfirm: ''          
      },
      payload: []
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    e.target.classList.add('active');
    
    this.setState({
      [e.target.name]: e.target.value
    });
    
    this.showInputError(e.target.name);
  }
  
  handleSubmit(e) {    
    e.preventDefault();
    
    console.log('component state', JSON.stringify(this.state));
    
    if (!this.showFormErrors()) {
      console.log('form is invalid: do not submit');
    } else {
      console.log('form is valid: submit');
    }

    const docs = {
      admin_id: this.state.admin_id,
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    axios.get(url, docs)
    .then(request => {
      console.log(request);
      console.log(request.data);
    })
  }
  
  showFormErrors() {
    const inputs = document.querySelectorAll('input');
    let isFormValid = true;
    
    inputs.forEach(input => {
      input.classList.add('active');
      
      const isInputValid = this.showInputError(input.name);
      
      if (!isInputValid) {
        isFormValid = false;
      }
    });
    
    return isFormValid;
  }
  
  showInputError(refName) {
    const validity = this.refs[refName].validity;
    const label = document.getElementById(`${refName}Label`).textContent;
    const error = document.getElementById(`${refName}Error`);
    const isPassword = refName.indexOf('password') !== -1;
    const isPasswordConfirm = refName === 'passwordConfirm';
    
    if (isPasswordConfirm) {
      if (this.refs.password.value !== this.refs.passwordConfirm.value) {
        this.refs.passwordConfirm.setCustomValidity('Passwords do not match');
      } else {
        this.refs.passwordConfirm.setCustomValidity('');
      }
    }
        
    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`; 
      } else if (validity.typeMismatch) {
        error.textContent = `${label} should be a valid email address`; 
      } else if (isPassword && validity.patternMismatch) {
        error.textContent = `${label} should be longer than 4 chars`; 
      } else if (isPasswordConfirm && validity.customError) {
        error.textContent = 'Passwords do not match';
      }
      return false;
    }
    
    error.textContent = '';
    return true;
  }

  render() {
    return (
      <form noValidate>
        <div className="form-group">
          <label id="emailLabel">Email</label>
          <input className="form-control"
            type="email"
            name="email"
            ref="email"
            value={ this.state.email } 
            onChange={ this.handleChange }
            required />
          <div className="error" id="emailError" />
        </div>
        <div className="form-group">
          <label id="passwordLabel">Password</label>
          <input className="form-control"
            type="password" 
            name="password"
            ref="password"
            value={ this.state.password } 
            onChange={ this.handleChange }
            pattern=".{5,}"
            required />
          <div className="error" id="passwordError" />
        </div>
        <div className="form-group">
          <label id="passwordConfirmLabel">Confirm Password</label>
          <input className="form-control"
            type="password" 
            name="passwordConfirm"
            ref="passwordConfirm"
            value={ this.state.passwordConfirm } 
            onChange={ this.handleChange }
            required />
          <div className="error" id="passwordConfirmError" />
        </div>
        <button className="btn btn-primary"
          onClick={ this.handleSubmit }>submit</button>
      </form>
    );
  }
}

export default FormAdmin;
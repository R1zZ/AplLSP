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
    this.setState({handleChange: 
      {...this.state.handleChange, 
        [e.target.name]: e.target.value
    }
    });
    
    e.target.classList.add('active');
        
    this.showInputError(e.target.name);
  }
  
  handleSubmit(e) {    
    e.preventDefault();
    console.log(this.state);

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
    //const label = document.getElementById(`${refName}Label`);
    const error = document.getElementById(`${refName}Error`);
    const isPasswordConfirm = refName === 'passwordConfirm';
    
    if (isPasswordConfirm) {
      if (this.refs.password.value !== this.refs.passwordConfirm.value) {
        this.refs.passwordConfirm.setCustomValidity('Passwords do not match');
      } else {
        this.refs.passwordConfirm.setCustomValidity('');
      }
    }
        
    if (!validity.valid ) {
      if (validity.valueMissing) {
        error.textContent = 'is a required field'; 
      } else if (isPasswordConfirm && validity.customError) {
        error.textContent = 'Passwords do not match';
      }
      return false;
    }
    
    error.textContent = ' ';
    return true;
  }

  render() {
    return (
      <form noValidate>
        <div className="form-group">
          <label id="adminIdLabel">ID Admin</label>
          <input className="form-control"
            type="text"
            name="admin_id"
            ref="admin_id"
            value={ this.state.admin_id } 
            readOnly
            required
          />
          <div className="error" id="adminIdError" />
        </div>
        <div className="form-group">
          <label id="nameLabel">Nama</label>
          <input className="form-control"
            type="text"
            name="name"
            ref="name"
            value={ this.state.name } 
            onChange={ this.handleChange }
          />
          <div className="error" id="nameError" />
        </div>
        <div className="form-group">
          <label id="usernameLabel">Username</label>
          <input className="form-control"
            type="text"
            name="username"
            ref="username"
            value={ this.state.username } 
            onChange={ this.handleChange }
          />
          <div className="error" id="usernameError" />
        </div>
        <div className="form-group">
          <label id="emailLabel">Email</label>
          <input className="form-control"
            type="email"
            name="email"
            ref="email"
            value={ this.state.email } 
            onChange={ this.handleChange }
          />
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
            pattern=" "
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
import React, { Component } from 'react';
import { Button, FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import axios from 'axios';

const url = `http://192.168.10.123:3000/admin`;
class FormAdmin extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRePass = this.handleRePass.bind(this);
    this.state = {
      value: '',
      onChange: {
        admin_id: '',
        name: '',
        username: '',
        password: '',
        email: '',
        repass:''
      },
      payload: [],
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.onChange
    });//memanggil semua data pada DB
  }

  handleRePass(e){
    this.setState({ value: e.target.value });
  }
  handleSubmit = event => {
    event.preventDefault();
    //pendeklarasian state di DB
    const docs = {
      admin_id: this.state.admin_id,
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    };
    console.log(docs);
    axios.post(url, docs)
      .then(request => {
        console.log(request);
        console.log(request.data);
      })
  }

 /* validate(){
    if (password !== value) {
      return "Password tidak sesuai";
    }
    return "Password Sesuai";
  }*/
  getValidationState() {
    const pass1 = this.state.onChange.password;
    const repass = this.state.value.length;
    if (repass >10 ) return 'success';
      else if (repass > 5 ) return 'warning';
      else if (repass > 0) return 'error';
    return null;
  }

  render() {
    //console.log(this.state.payload);
    return (
      <div className="component">
        <form  onSubmit={this.handleSubmit}>
          <FormGroup>
            <ControlLabel>ID Admin</ControlLabel>{' '}
            <FormControl type="text" name="admin_id" defaultValue={this.state.admin_id} readOnly="readOnly" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Nama</ControlLabel>{' '}
            <FormControl type="text" name="name" placeholder="name" value={this.state.name} onChange={this.name} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Username</ControlLabel>{' '}
            <FormControl type="text" name="username" placeholder="username" value={this.state.username} onChange={this.username} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Password</ControlLabel>{' '}
            <FormControl type="password" name="pass1" placeholder="password" value={this.state.password} />
          </FormGroup>
          <FormGroup validationState={this.getValidationState()}>
            <ControlLabel>Re Password</ControlLabel>{' '}
            <FormControl type="password" value={this.state.value} onChange={this.handleRePass} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Email</ControlLabel>{' '}
            <FormControl type="email" name="email" placeholder="email" value={this.state.email} onChange={this.email} />
          </FormGroup>

          <Button type="submit" name="btn">Submit</Button>
        </form>
      </div >
    )
  }
}

export default FormAdmin;
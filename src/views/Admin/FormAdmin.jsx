import React, { Component } from 'react';
import { Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import axios from 'axios';

const url = `http://192.168.10.123:3000/admin`;
class FormAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onChange: {
        admin_id: '',
        name: '',
        username: '',
        password: '',
        email: ''
      },
      payload: []
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.onChange
    });//memanggil semua data pada DB
  }

  handleSubmit = event => {
    event.preventDefault();
    //pendeklarasian state di DB
    const docs = {
      admin_id: this.state.admin_id,
      name: this.state.name,
      username: this.state.username,
      password: this.state.username,
      email: this.state.email
    };
    console.log(docs);
    axios.post(url, docs)
      .then(request => {
        console.log(request);
        console.log(request.data);
      })
  }
  render() {
    console.log(this.state.payload);
    return (
      <div className="component">
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <ControlLabel>ID Admin</ControlLabel>{' '}
            <FormControl type="text" placeholder="admin_id" value={this.state.admin_id} onChange={this.admin_id} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Nama</ControlLabel>{' '}
            <FormControl type="text" placeholder="name" value={this.state.name} onChange={this.name} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Username</ControlLabel>{' '}
            <FormControl type="text" placeholder="username" value={this.state.username} onChange={this.username} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Password</ControlLabel>{' '}
            <FormControl type="password" placeholder="password" value={this.state.password} onChange={this.password} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Email</ControlLabel>{' '}
            <FormControl type="email" placeholder="email" value={this.state.email} onChange={this.email} />
          </FormGroup>

          <Button type="submit">Submit</Button>
        </form>
      </div >
    )
  }
}

export default FormAdmin;
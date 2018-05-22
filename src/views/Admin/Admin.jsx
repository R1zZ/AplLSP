import React, { Component } from "react";
import {
  Grid,
  Row, Col
} from "react-bootstrap";
import axios from 'axios';
import { Card } from "components/Card/Card.jsx";
import 'components/css/Form/Form.css';

const url = `http://192.168.10.123:3000/admin`;
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        NIK: '',
        name: '',
        username: '',
        email: ''
      },
      payload: []
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });//memanggil semua data pada DB
  }
  handleSubmit = event => {
    event.preventDefault();
    //pendeklarasian state di DB
    const docs = {
      NIK: this.state.NIK,
      name: this.state.name,
      username: this.state.username,
      email: this.state.email
    };
    console.log(docs);
    axios.post(url, docs)
      .then(request => {
        console.log(request);
        console.log(request.data);
      })
  }
  componentDidMount() {
    axios.get(url)
      .then(request => {
        this.setState({
          payload: request.data.payload // setState berfungsi untuk manipulasi array  
        });
      })
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <div className="container-contact100">
                <div className="wrap-contact100">
                  <form className="contact100-form validate-form" onSubmit={this.handleSubmit}>
                    <span className="contact100-form-title">Input Admin</span>
                    
                    <label className="label-input100" >NIK *</label>
                    <div className="wrap-input100">
                      <input type="text" name="nik" placeholder="NIK" onChange={this.handleChange} value={this.state.value.NIK} />
                      <span className="focus-input100"></span>
                    </div>

                    <label className="label-input100" >Nama *</label>
                    <div className="wrap-input100">
                      <input type="text" name="nama" placeholder="Name of Asesor" onChange={this.handleChange} value={this.state.value.name} />
                      <span className="focus-input100"></span>
                    </div>

                    <label className="label-input100" >Alamat Email *</label>
                    <div className="wrap-input100">
                      <input type="text" name="email" placeholder="Almt Email" onChange={this.handleChange} value={this.state.value.email} />
                      <span className="focus-input100"></span>
                    </div>

                    <label className="label-input100" >Username & Password </label>
                    <div className="wrap-input100 rs1">
                      <input type="text" name="username" placeholder="username" onChange={this.handleChange} value={this.state.value.username} />
                      <span className="focus-input100"></span>
                    </div>
                    <div className="wrap-input100 rs1">
                      <input type="password" name="password" placeholder="password" onChange={this.handleChange} value={''} />
                      <span className="focus-input100"></span>
                    </div>

                    <div className="container-contact100-form-btn">
                      <button className="contact100-form-btn">
                        <span>
                          Submit
                </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <Card
                content={
                  <div><label>List Admin</label>
                    {//nampilin dari inputan API
                      this.state.payload.map(({ NIK, name, username, email }, key) => {
                        return (<h5 key={key}>{NIK},{name},{username},{email}</h5>)
                      })
                    }
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Admin;

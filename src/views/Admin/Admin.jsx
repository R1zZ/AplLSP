import React, { Component } from "react";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";
import axios from 'axios';
//import { PostApi } from 'components/PostApi/PostApi.jsx';

import { Card } from "components/Card/Card.jsx";
//import { FormInputs } from "components/FormInputs/FormInputs.jsx";
//import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

//import avatar from "assets/img/faces/face-3.jpg";
const url = `http://192.168.10.123:3000/admin`;
class Admin extends Component {
    constructor(props){
      super(props);
      this.state= {
        value:{
          NIK:'',
          name:'',
          username:'',
          email:''
        },
        payload:[]
      };
  }
  handleChange = event => {
      this.setState({
        [event.target.name] : event.target.value
      });
  }
  handleSubmit = event => {
      event.preventDefault();

      const docs ={
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
  componentDidMount(){
    axios.get(url)
    .then(request =>{
      this.setState({
        payload:request.data.payload // setState berfungsi untuk manipulasi array  
      });
    })
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="List Admin"
                content={
                  <div>
                    <form onSubmit={this.handleSubmit}>
                      <input type="text" name="NIK" onChange={this.handleChange} placeholder="NIK" value={this.state.value.NIK} />
                      <input type="text" name="name" onChange={this.handleChange} placeholder="Nama" value={this.state.value.name} />
                      <input type="text" name="username" onChange={this.handleChange} placeholder="Username" value={this.state.value.username}/>
                      <input type="text" name="email" onChange={this.handleChange} placeholder="Email" value={this.state.value.email} />
                      <button>Add</button>
                    </form>
                    <p/>
                    <ul>
                    {
                      this.state.payload.map(({NIK,name,username,email},key) => {
                        return (<h5 key={key}>{NIK},{name},{username},{email}</h5>)
                      })
                    }
                    </ul>
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

import React, { Component } from "react";
import {
  Grid,
  Row,Col
} from "react-bootstrap";
import axios from 'axios';
//import { PostApi } from 'components/PostApi/PostApi.jsx';

//import { Card } from "components/Card/Card.jsx";

import '../css/input.css';
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
      });//memanggil semua data pada DB
  }
  handleSubmit = event => {
      event.preventDefault();
 //pendeklarasian state di DB
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
            <form onSubmit={this.handleSubmit}>
                    <h1>Masukan Data Admin</h1>
                    
                  <div className="contentform">
                    <div id="sendmessage"> Your message has been sent successfully. Thank you. </div>

                    <div className="leftcontact">
                      <div className="form-group">
                        <p>NIK<span>*</span></p>
                        <input 
                          type="text"
                          name="nik"
                          onChange={this.handleChange} 
                          value={this.state.value.NIK} 
                        />
                        <div className="validation"></div>
                      </div> 
                      <div className="form-group">
                        <p>Nama <span>*</span></p>
                          <input 
                            type="text" 
                            name="name" 
                            onChange={this.handleChange} 
                            value={this.state.value.name} 
                          />
                        <div className="validation"></div>
                      </div>
                      <div className="form-group">
                        <p>E-mail <span>*</span></p>	
                        <input 
                          type="text" 
                          name="email" 
                          onChange={this.handleChange} 
                          value={this.state.value.email} 
                        />
                        <div className="validation"></div>
                      </div>	
                      <div className="form-group">
                        <p>Company <span>*</span></p>
                        <input type="text" name="society" id="society" data-rule="required" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Société' doit être renseigné."/>
                        <div className="validation"></div>
                      </div>
                      <div className="form-group">
                        <p>Company Address <span>*</span></p>
                        <input type="text" name="adresse" id="adresse" data-rule="required" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Adresse' doit être renseigné."/>
                        <div className="validation"></div>
                      </div>
                      <div className="form-group">
                        <p>Postcode <span>*</span></p>
                        <input type="text" name="postal" id="postal" data-rule="required" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Code postal' doit être renseigné."/>
                        <div className="validation"></div>
                      </div>
                    </div>

                <div className="rightcontact">	
                  <div className="form-group">
                    <p>Username<span>*</span></p>
                    <input 
                      type="text" 
                      name="username" 
                      onChange={this.handleChange} 
                      placeholder="Username" 
                      value={this.state.value.username}
                    />
                    <div className="validation"></div>
                  </div>	
                  <div className="form-group">
                    <p>Phone number <span>*</span></p>	
                    <input type="text" name="phone" id="phone" data-rule="maxlen:10" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Téléphone' doit être renseigné. Minimum 10 chiffres"/>
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <p>Function <span>*</span></p>
                    <input type="text" name="fonction" id="fonction" data-rule="required" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Fonction' doit être renseigné."/>
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <p>Subject <span>*</span></p>	
                    <input type="text" name="sujet" id="sujet" data-rule="required" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Sujet' doit être renseigné."/>
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <p>Message <span>*</span></p>
                    <textarea name="message" rows="14" data-rule="required" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Message' doit être renseigné."></textarea>
                    <div className="validation"></div>
                  </div>	
                </div>
              </div>
              <button type="submit" className="bouton-contact">Send</button>
              </form>
              <div>
              {//nampilin dari inputan API
                this.state.payload.map(({NIK,name,username,email},key) => {
                return (<h5 key={key}>{NIK},{name},{username},{email}</h5>)
                })
              }
              </div>

            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Admin;

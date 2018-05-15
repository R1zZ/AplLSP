import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
//import { thArray } from "variables/Variables.jsx";
import * as firebase from 'firebase';
import { config } from '../config/Firebase.js' ;
//import axios from 'axios';

class TUK extends Component {
  constructor(props){
    super(props);
    this.app = firebase.initializeApp(config);
    this.database = this.app.database();//pemilihan database
  
      this.state={
      firstName:['']
    };
  };

  componentDidMount(){
    this.database.ref('firstName').on('value', snap => { //ref menunjukan value di firebase
      this.setState({
        firstName: snap.val()
      });
    });
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="List Table User"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div>
                    <h1>{this.state.config}</h1>
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

export default TUK;

import React, { Component } from "react";
import {
  Grid,
  Row,
  Col
  /*FormGroup,
  ControlLabel,
  FormControl*/
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
//import { FormInputs } from "components/FormInputs/FormInputs.jsx";
//import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

//import avatar from "assets/img/faces/face-3.jpg";

class Admin extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="List Admin"
                content={
                  <h1>CRUD Admin</h1>
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

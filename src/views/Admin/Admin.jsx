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
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
//import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

//import avatar from "assets/img/faces/face-3.jpg";

class Admin extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName:'',
      lastName:'',
      address:'',
      city:'',
      country:'',
      bd:'',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState(
      {firstName:event.target.value},
      {lastName:event.target.value},
      {address:event.target.value},
      {city:event.target.value},
      {country:event.target.value},
      {bd:event.target.value}  
    )
  }

  handleSubmit(event){
    alert(
      this.state.firstName + ' ' +
      this.state.lastName + ' ' +
      this.state.address + ' ' +
      this.state.city + ' ' +
      this.state.country + ' ' +
      this.state.bd
    );
    event.preventDefault();
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
                  <form onSubmit={this.handleSubmit}>
                    <FormInputs
                      onChange={this.handleChange}
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "First name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "First name",
                        },
                        {
                          label: "Last name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Last name",
                        }
                      ]}
                      value={this.state.value}
                    />
                    <FormInputs
                      onChange={this.handleChange}
                      ncols={["col-md-4"]}
                      proprieties={[
                        {
                          label: "birthday",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "Date"
                        }
                      ]}
                      value={this.state.value}
                    />
                    <FormInputs
                      onChange={this.handleChange}
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "Adress",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Home Adress",
                        }
                      ]}
                      value={this.state.value}
                    />

                    <Button bsStyle="info" pullRight fill type="submit">
                      Update Profile
                    </Button>
                    <div className="clearfix" />
                  </form>
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

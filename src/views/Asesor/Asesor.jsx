import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import FormInputs from 'components/FormInputs/FormInputs.jsx'
import ListNilai from 'components/FormInputs/ListNilai.jsx';
class Asesor extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      nilai:[]
    };
  
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }
  
  componentDidMount(){
    this.getNilai();
  }
  
  getNilai(){
    return this.state.nilai
  }
  
  onAdd(firstName,lastName){
    const nilai = this.getNilai();
    nilai.push({
      firstName,
      lastName
    });
  
    this.setState({nilai});
  }
  
  onDelete(firstName){
    const nilai = this.getNilai();
    const filterNilai = nilai.filter(nilai => {
      return nilai.firstName !== firstName;
    });
    this.setState({nilai: filterNilai});
  }
  
  onEditSubmit(firstName, lastName, originalName){
    let nilai = this.getNilai();
    nilai = nilai.map(nilai => {
      if (nilai.firstName === originalName) {
        nilai.firstName = firstName;
        nilai.lastName = lastName;
      }
      return nilai;
    });
    this.setState({nilai});
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="List Asesor"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div className="App">
                    <label>Input</label>
                    <FormInputs
                      onAdd={this.onAdd}
                    />
                    {
                      this.state.nilai.map(nilai => {
                        return (
                          <ListNilai 
                            key={nilai.firstName}
                            firstName={nilai.firstName}
                            lastName={nilai.lastName}
                            onDelete={this.onDelete}
                            onEditSubmit={this.onEditSubmit}
                          />
                        );
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

export default Asesor;

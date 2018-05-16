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
  
  onAdd(nik,nama,tempatLahir,tgl){
    const nilai = this.getNilai();
    nilai.push({
      nik,
      nama,
      tempatLahir,
      tgl
    });
  
    this.setState({nilai});
  }
  
  onDelete(nik){
    const nilai = this.getNilai();
    const filterNilai = nilai.filter(nilai => {
      return nilai.nik !== nik;
    });
    this.setState({nilai: filterNilai});
  }
  
  onEditSubmit(nik, nama, tempatLahir, tgl, originalName){
    let nilai = this.getNilai();
    nilai = nilai.map(nilai => {
      if (nilai.nik === originalName) {
        nilai.nik = nik;
        nilai.nama = nama;
        nilai.tempatLahir = tempatLahir;
        nilai.tgl = tgl;
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
                            key={nilai.nik}
                            nik={nilai.nik}
                            nama={nilai.nama}
                            tempatLahir={nilai.tempatLahir}
                            tgl={nilai.tgl}
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

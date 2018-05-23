import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import axios from 'axios';
//import { request } from "http";

const url = `http://sertimedia.com/api/v1/jadwal/1/sertifikat?api_key=46xYSrCEfwPeQfW1KCT7`;
class Sertifikasi extends Component {
  constructor(props){
    super(props);
    this.state = {
      value:{
        id:'',
        pengguna_id:'',
        status:'',
        nilai:'',
        sertifikasi_nomor:'',
        sertifikasi_tanggal_terbit:'',
        sertifikasi_tanggal_mulai:'',
        sertifikasi_tanggal_selesai:'',
        banding_permintaan:'',
        banding_keputusan:''  
      },
      payload:[]
    }
    
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

/*  handleSubmit = event => {
    event.preventDefault();

    const docs = {
      id:this.state.id,
      pengguna_id:this.state.pengguna_id,
      status:this.state.status,
      nilai:this.state.nilai,
      sertifikasi_nomor:this.state.sertifikasi_nomor,
      sertifikasi_tanggal_terbit:this.state.sertifikasi_tanggal_terbit,
      sertifikasi_tanggal_mulai:this.state.sertifikasi_tanggal_mulai,
      sertifikasi_tanggal_selesai:this.state.sertifikasi_tanggal_selesai,
      banding_permintaan:this.state.banding_permintaan,
      banding_keputusan:this.state.banding_keputusan      
    };
  }*/
  componentDidMount(){
    axios.get(url)
      .then(request => {
        this.setState({
          payload:request.data.payload
        });
      })
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="List Data Sertifikasi"
                content={
                  <div>
                    {//nampilin dari inputan API
                      this.state.payload.map(({ 
                        id, 
                        pengguna_id, 
                        status, 
                        nilai, 
                        sertifikasi_nomor,
                        sertifikasi_tanggal_terbit,
                        sertifikasi_tanggal_mulai,
                        sertifikasi_tanggal_selesai,
                        banding_permintaan,
                        banding_keputusan
                       }, key) => {
                        return (
                        <h5 key={key}>
                          {id},
                          {pengguna_id},
                          {status},
                          {nilai},
                          {sertifikasi_nomor},
                          {sertifikasi_tanggal_terbit},
                          {sertifikasi_tanggal_mulai},
                          {sertifikasi_tanggal_selesai},
                          {banding_permintaan},
                          {banding_keputusan}
                        </h5>)
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


export default Sertifikasi;

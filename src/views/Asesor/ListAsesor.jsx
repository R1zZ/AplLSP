import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import axios from 'axios';

const url = `http://192.168.10.123:3000/admin`
class Asesor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        NIK: '',
        NPWP: '',
        nama: '',
        tempatlahir: '',
        tgl_lahir: '',
        alamat: '',
        jk: '',
        keahlian: '',
        status: '',
        jdwal_asesor: ''
      },
      payload: []
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.NIK]: event.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    const docs = {
      NIK: this.state.NIK,
      NPWP: this.state.NPWP,
      nama: this.state.nama,
      tempatlahir: this.state.tempatlahir,
      tgl_lahir: this.state.tgl_lahir,
      alamat: this.state.alamat,
      jk: this.state.jk,
      keahlian: this.state.keahlian,
      status: this.state.status,
      jdwal_asesor: this.state.jdwal_asesor,
    };
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
          payload: request.data.payload
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
                content={
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>NIK</th>
                        <th>NPWP</th>
                        <th>Nama</th>
                        <th>Tempat Lahir</th>
                        <th>Tanggal Lahir</th>
                        <th>Alamat</th>
                        <th>Jenis Kelamin</th>
                        <th>Keahlian Asesor</th>
                        <th>Status Asesor</th>
                        <th>Jadwal Asesor</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.payload.map((
                          {
                            NIK,
                            NPWP,
                            nama,
                            tempatlahir,
                            tgl_lahir,
                            alamat,
                            jk,
                            keahlian,
                            status,
                            jdwal_asesor,
                          }, key) => {
                          return (
                            <tr key={key}>
                              <td>{NIK}</td>
                              <td>{NPWP}</td>
                              <td>{nama}</td>
                              <td>{tempatlahir}</td>
                              <td>{tgl_lahir}</td>
                              <td>{alamat}</td>
                              <td>{jk}</td>
                              <td>{keahlian}</td>
                              <td>{status}</td>
                              <td>{jdwal_asesor}</td>
                              <td>Tombol edit</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>
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

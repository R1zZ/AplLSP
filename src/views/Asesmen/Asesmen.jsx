import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import axios from 'axios';

const url = `http://192.168.10.123:3000/admin`
class Asesmen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        id: '',
        perusahaan_id: '',
        produk_id: '',
        mentor_id: '',
        tanggal_mulai: '',
        tanggal_selsesai: '',
        waktu_mulai: '',
        waktu_selesai: '',
        lokasi: '',
        harga: '',
        deskripsi: '',
        status: ''
      },
      payload: []
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    const docs = {
      id: this.state.id,
      perusahaan_id: this.state.perusahaan_id,
      produk_id: this.state.produk_id,
      mentor_id: this.state.mentor_id,
      tanggal_mulai: this.state.tanggal_mulai,
      tanggal_selsesai: this.state.tanggal_selsesai,
      waktu_mulai: this.state.waktu_mulai,
      waktu_selesai: this.state.waktu_selesai,
      lokasi: this.state.lokasi,
      harga: this.state.harga,
      deskripsi: this.state.deskripsi,
      status: this.state.status
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
                        <th>id</th>
                        <th>ID Perusahaan</th>
                        <th>ID Produk</th>
                        <th>ID Mentor</th>
                        <th>Tanggal Mulai</th>
                        <th>Tanggal Selesai</th>
                        <th>Waktu Mulai</th>
                        <th>Waktu Selesai</th>
                        <th>Lokasi</th>
                        <th>Harga</th>
                        <th>Deskripsi</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.payload.map((
                          {
                            id,
                            perusahaan_id,
                            produk_id,
                            mentor_id,
                            tanggal_mulai,
                            tanggal_selsesai,
                            waktu_mulai,
                            waktu_selesai,
                            lokasi,
                            harga,
                            deskripsi,
                            status
                          }, key) => {
                          return (
                            <tr key={key}>
                              <td>{id}</td>
                              <td>{perusahaan_id}</td>
                              <td>{produk_id}</td>
                              <td>{mentor_id}</td>
                              <td>{tanggal_mulai}</td>
                              <td>{tanggal_selsesai}</td>
                              <td>{waktu_mulai}</td>
                              <td>{waktu_selesai}</td>
                              <td>{lokasi}</td>
                              <td>{harga}</td>
                              <td>{deskripsi}</td>
                              <td>{status}</td>
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

export default Asesmen;

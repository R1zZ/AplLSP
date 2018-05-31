import React, { Component } from "react";
import Card from 'components/Card/Card.jsx';
import ListTuk from './ListTuk'
import axios from 'axios';
import { Grid, Row, Col } from "react-bootstrap";
import 'components/css/Body/Body.css';

const url = `http://sertimedia.com/api/v1/jadwal?api_key=46xYSrCEfwPeQfW1KCT7`;
class TUK extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      open: false,
      value: {
        id: '',
        produk_id: '',
        tanggal_mulai: '',
        tanggal_selesai: '',
        waktu_mulai: '',
        waktu_selesai: '',
        lokasi: '',
        harga: '',
        deskripsi: '',
        status: ''
      },
      payload: []
    };

    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentDidMount() {
    axios.get(url)
      .then(request => {
        this.setState({
          payload: request.data.data
        });
      })
  }

  getNilai() {
    return this.state.payload
  }

  onAdd(
    id,
    produk_id,
    tanggal_mulai,
    tanggal_selesai,
    waktu_mulai,
    waktu_selesai,
    lokasi,
    harga,
    deskripsi,
    status) {
    const payload = this.getNilai();
    payload.push({
      id,
      produk_id,
      tanggal_mulai,
      tanggal_selesai,
      waktu_mulai,
      waktu_selesai,
      lokasi,
      harga,
      deskripsi,
      status
    });
    this.setState({ payload })
  }

  onEditSubmit(
    id,
    produk_id,
    tanggal_mulai,
    tanggal_selesai,
    waktu_mulai,
    waktu_selesai,
    lokasi,
    harga,
    deskripsi,
    status,
    originalID) {
    let payload = this.getNilai();
    payload = payload.map(payload => {
      if (payload.id === originalID) {
        payload.id = id;
        payload.produk_id = produk_id;
        payload.tanggal_mulai = tanggal_mulai;
        payload.tanggal_selesai = tanggal_selesai;
        payload.waktu_mulai = waktu_mulai;
        payload.waktu_selesai = waktu_selesai;
        payload.lokasi = lokasi;
        payload.harga = harga;
        payload.deskripsi = deskripsi;
        payload.status = status;
      }
      return payload;
    });
    this.setState({ payload });
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className="content" align="center">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="List TUK"
                content={
                  this.state.payload.map(payload => {
                    return (
                      <ListTuk 
                        key={payload.id}
                        id={payload.id}
                        produk_id={payload.produk_id}
                        tanggal_mulai={payload.tanggal_mulai}
                        tanggal_selesai={payload.tanggal_selesai}
                        waktu_mulai={payload.waktu_mulai}
                        waktu_selesai={payload.waktu_selesai}
                        lokasi={payload.lokasi}
                        harga={payload.harga}
                        deskripsi={payload.deskripsi}
                        status={payload.status}
                      />
                    )
                  })
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

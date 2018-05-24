import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import EditSertifikat from './EditSertifikat.jsx';
import axios from 'axios';
//import RaisedButton from 'material-ui/RaisedButton';
//import { FlatButton, Dialog } from "material-ui";
//import { MuiThemeProvider, getMuiTheme } from "material-ui/styles";

//const muiThemebtn = getMuiTheme();
const url = `http://sertimedia.com/api/v1/jadwal/1/sertifikat?api_key=46xYSrCEfwPeQfW1KCT7`;
class Sertifikasi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {

        id: '',
        pengguna_id: '',
        status: '',
        nilai: '',
        sertifikat_nomor: '',
        sertifikat_tanggal_terbit: '',
        sertifikat_tanggal_mulai: '',
        sertifikat_tanggal_selesai: '',
        banding_permintaan: '',
        banding_keputusan: ''
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
    pengguna_id,
    status,
    nilai,
    sertifikat_nomor,
    sertifikat_tanggal_terbit,
    sertifikat_tanggal_mulai,
    sertifikat_tanggal_selesai,
    banding_permintaan,
    banding_keputusan){
      const payload = this.getNilai();
      payload.push({
        id,
        pengguna_id,
        status,
        nilai,
        sertifikat_nomor,
        sertifikat_tanggal_terbit,
        sertifikat_tanggal_mulai,
        sertifikat_tanggal_selesai,
        banding_permintaan,
        banding_keputusan
      });

      this.setState({payload})
    }

  onEditSubmit(
    id,
    pengguna_id,
    status,
    nilai,
    sertifikat_nomor,
    sertifikat_tanggal_terbit,
    sertifikat_tanggal_mulai,
    sertifikat_tanggal_selesai,
    banding_permintaan,
    banding_keputusan,
    originalId) {
    let payload = this.getNilai();
    payload = payload.map(payload => {
      if (payload.id === originalId) {
        payload.id = id;
        payload.pengguna_id = pengguna_id;
        payload.status = status;
        payload.nilai = nilai;
        payload.sertifikat_nomor = sertifikat_nomor;
        payload.sertifikat_tanggal_terbit = sertifikat_tanggal_terbit;
        payload.sertifikat_tanggal_mulai = sertifikat_tanggal_mulai;
        payload.sertifikat_tanggal_selesai = sertifikat_tanggal_selesai;
        payload.banding_permintaan = banding_permintaan;
        payload.banding_keputusan = banding_keputusan;
      }
      return payload;
    });
    this.setState({ payload });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    return (
      <div className="content" align="center">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="List Data Sertifikasi"
                content={
                  this.state.payload.map(payload => {
                    return (
                      <EditSertifikat
                        key={payload.id}
                        id={payload.id}
                        pengguna_id={payload.pengguna_id}
                        status={payload.status}
                        nilai={payload.nilai}
                        sertifikat_nomor={payload.sertifikat_nomor}
                        sertifikat_tanggal_terbit={payload.sertifikat_tanggal_terbit}
                        sertifikat_tanggal_mulai={payload.sertifikat_tanggal_mulai}
                        sertifikat_tanggal_selesai={payload.sertifikat_tanggal_selesai}
                        banding_permintaan={payload.banding_permintaan}
                        banding_keputusan={payload.banding_keputusan}
                        onEditSubmit={this.onEditSubmit}
                      />
                    );
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


export default Sertifikasi;

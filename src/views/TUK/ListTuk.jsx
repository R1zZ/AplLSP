import React, { Component } from "react";
import Dialog from 'material-ui/Dialog';
import axios from 'axios';
import FlatButton from 'material-ui/FlatButton';
import ProdukTuk from './ProdukTuk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import { Button, Table, Glyphicon, Form, FormControl, FormGroup, ControlLabel } from "react-bootstrap";
import 'components/css/Body/Body.css';

const muiThemebtn = getMuiTheme();
const url = `http://sertimedia.com/api/v1/jadwal?api_key=46xYSrCEfwPeQfW1KCT7`;
const urlUpdate = `http://sertimedia.com/api/v1/jadwal/1?api_key=46xYSrCEfwPeQfW1KCT7`;
const payload = [];
/*const waktu_mulai = this.props;
var TimeWrapper = React.createClass({


  onTimeChangeHandler: function (val) {

    // do something with this value

  },

  render: function () {
    return (

    );
  }
});*/

class ListTuk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      open: false,
      status: ''
    };

    this.onEdit = this.onEdit.bind(this);
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

  onEdit() {
    this.setState({ isEdit: true })
  }

  onEditSubmit = event => {
    event.preventDefault();

    const data = { status: this.state.name }

    axios.put(urlUpdate, { data })
      .then(request => {
        console.log(request);
        console.log(request.data)
      })
  }


  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    this.setState({ status: event.target.value });
  }

  render() {
    console.log(this.state.payload)
    const {
      id,
      produk_id,
      tanggal_mulai,
      tanggal_selesai,
      waktu_mulai,
      waktu_selesai,
      lokasi,
      status
    } = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />
    ];
    return (
      <div className="content" align="center">
        <MuiThemeProvider muiTheme={muiThemebtn}>
          {
            this.state.isEdit ? (
              <Form inline onSubmit={this.onEditSubmit}>
                <FormGroup>
                  <ControlLabel>Status Jadwal</ControlLabel>{' '}
                  <FormControl componentClass="select" name="status" placeholder="status" ref={status => this.id = status} defaultValue={status} >
                    <option value="terverivikasi">Terverifikasi</option>
                    <option value="gagal">Gagal Verifikasi</option>
                    <option value="tunda">Menunggku Konfirmasi</option>
                  </FormControl>
                </FormGroup>
                <p />
                <div className="container-contact100-Form-btn">
                  <button className="contact100-Form-btn">
                    <span>
                      Submit
                            </span>
                  </button>
                </div>
              </Form>
            ) : (
                <Table responsive>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>ID Produk</th>
                      <th>Tanggal Mulai</th>
                      <th>Tanggal Selesai</th>
                      <th>Waktu Mulai</th>
                      <th>Waktu Selesai</th>
                      <th>Lokasi</th>
                      <th>Status</th>
                      <th>Produk</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      [payload].map((data, key) => {
                        return (
                          <tr key={key}>
                            <td>{id}</td>
                            <td>{produk_id}</td>
                            <td>{tanggal_mulai}</td>
                            <td>{tanggal_selesai}</td>
                            <td>{waktu_mulai}</td>
                            <td>{waktu_selesai}</td>
                            <td>{lokasi}</td>
                            <td>{status}</td>
                            <td>
                              <RaisedButton label="Lihat Produk" onClick={this.handleOpen} />
                              <Dialog
                                title="Input Data Asesor"
                                actions={actions}
                                modal={false}
                                open={this.state.open}
                                onRequestClose={this.handleClose}
                              //autoScrollBodyContent={true}
                              >
                                <ProdukTuk />
                                </Dialog>
                            </td>
                            <td>
                              <Button bsSize="xsmall" onClick={this.onEdit}>
                                <Glyphicon glyph="pencil" /> Edit
                                          </Button>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
              )
          }
        </MuiThemeProvider>
      </div>
    );
  }
}

export default ListTuk;

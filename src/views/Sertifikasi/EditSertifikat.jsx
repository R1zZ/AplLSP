import React, { Component } from "react";
import { Button, Table, Glyphicon } from "react-bootstrap";
import axios from 'axios';

const url = `http://sertimedia.com/api/v1/jadwal/1/sertifikat?api_key=46xYSrCEfwPeQfW1KCT7`;
const payload = [];
class Sertifikasi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    };
    this.state = {

    }

    //this.onAdd = this.onAdd.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  onEdit() {
    this.setState({ isEdit: true })
  }

  getNilai() {
    return this.state.payload
  }

  onEditSubmit = event => {
    event.preventDefault();

    const data = { payload: this.state.name }

    axios.patch(url,{data})
      .then(request => {
        console.log(request);
        console.log(request.data)
        /*        this.setState({
          payload: request.data.data
        });
*/      })
  };

/*  componentDidMount() {
 }
*/ 
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    console.log(this.state.payload);
    const {
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
    } = this.props;
    return (
      <div className="content" align="center">
        {
          this.state.isEdit ? (
            <form className="contact100-form validate-form" onSubmit={this.onEditSubmit}>
              <span className="contact100-form-title">
                Contact Us
                      </span>
              <label className="label-input100" >ID *</label>
              <div className="wrap-input100">
                <input type="text" name="id" placeholder="ID" ref={id => this.id = id} defaultValue={id} />
                <span className="focus-input100"></span>
              </div>
              <label className="label-input100" >pengguna_id *</label>
              <div className="wrap-input100">
                <input type="text" name="pengguna_id" placeholder="pengguna_id" ref={pengguna_id => this.pengguna_id = pengguna_id} defaultValue={pengguna_id} />
                <span className="focus-input100"></span>
              </div>

              <label className="label-input100" >status *</label>
              <div className="wrap-input100">
                <input type="text" name="status" placeholder="status" ref={status => this.status = status} defaultValue={status} />
                <span className="focus-input100"></span>
              </div>

              <label className="label-input100" >nilai *</label>
              <div className="wrap-input100">
                <input type="text" name="nilai" placeholder="nilai" ref={nilai => this.nilai = nilai} defaultValue={nilai} />
                <span className="focus-input100"></span>
              </div>

              <label className="label-input100" >sertifikat_nomor *</label>
              <div className="wrap-input100">
                <input type="text" name="sertifikat_nomor" placeholder="sertifikat_nomor" ref={sertifikat_nomor => this.sertifikat_nomor = sertifikat_nomor} defaultValue={sertifikat_nomor} />
                <span className="focus-input100"></span>
              </div>
              <label className="label-input100" >sertifikat_tanggal_terbit *</label>
              <div className="wrap-input100">
                <input type="date" name="sertifikat_tanggal_terbit" placeholder="sertifikat_tanggal_terbit" ref={sertifikat_tanggal_terbit => this.sertifikat_tanggal_terbit = sertifikat_tanggal_terbit} defaultValue={sertifikat_tanggal_terbit} />
                <span className="focus-input100"></span>
              </div>
              <label className="label-input100" >sertifikat_tanggal_mulai *</label>
              <div className="wrap-input100">
                <input type="date" name="sertifikat_tanggal_mulai" placeholder="sertifikat_tanggal_mulai" ref={sertifikat_tanggal_mulai => this.sertifikat_tanggal_mulai = sertifikat_tanggal_mulai} defaultValue={sertifikat_tanggal_mulai} />
                <span className="focus-input100"></span>
              </div>
              <label className="label-input100" >sertifikat_tanggal_selesai *</label>
              <div className="wrap-input100">
                <input type="date" name="sertifikat_tanggal_selesai" placeholder="sertifikat_tanggal_selesai" ref={sertifikat_tanggal_selesai => this.sertifikat_tanggal_selesai = sertifikat_tanggal_selesai} defaultValue={sertifikat_tanggal_selesai} />
                <span className="focus-input100"></span>
              </div>
              <label className="label-input100" >banding_permintaan *</label>
              <div className="wrap-input100">
                <input type="text" name="banding_permintaan" placeholder="banding_permintaan" ref={banding_permintaan => this.banding_permintaan = banding_permintaan} defaultValue={banding_permintaan} />
                <span className="focus-input100"></span>
              </div>
              <label className="label-input100" >banding_keputusan *</label>
              <div className="wrap-input100">
                <input type="text" name="banding_keputusan" placeholder="banding_keputusan" ref={banding_keputusan => this.banding_keputusan = banding_keputusan} defaultValue={banding_keputusan} />
                <span className="focus-input100"></span>
              </div>
              <div className="container-contact100-form-btn">
                <button className="contact100-form-btn">
                  <span>
                    Submit
                            </span>
                </button>
              </div>
            </form>
          ) : (
              <Table responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>ID Pengguna</th>
                    <th>Status</th>
                    <th>Nilai</th>
                    <th>No Sertifikat</th>
                    <th>Tgl Terbit Sertifikat</th>
                    <th>Tgl mulai Sertifikat</th>
                    <th>Tgl selesai Sertifikat</th>
                    <th>Permintaan Banding</th>
                    <th>Keputusan Banding</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    //this.state.
                    [payload].map((data, key) => {
                      return (
                        <tr key={key}>
                          <td>{id}</td>
                          <td>{pengguna_id}</td>
                          <td>{status}</td>
                          <td>{nilai}</td>
                          <td>{sertifikat_nomor}</td>
                          <td>{sertifikat_tanggal_terbit}</td>
                          <td>{sertifikat_tanggal_mulai}</td>
                          <td>{sertifikat_tanggal_selesai}</td>
                          <td>{banding_permintaan}</td>
                          <td>{banding_keputusan}</td>
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
      </div >
    );
  }
}


export default Sertifikasi;

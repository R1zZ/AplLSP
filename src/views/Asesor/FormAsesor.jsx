import React, { Component } from 'react';
import { Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
/*import axios from 'axios';

const url = `http://192.168.10.234:9000/assesors`*/
class FormInput extends Component {
/*  constructor(props) {
    super(props);
    this.state = {
      value: {
        id: '',
        accountID: '',
        firstName: '',
        competencies: '',
        active: ''
      },
      payload: []
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });//memanggil semua data pada DB
  }
    handleSubmit = event => {
      event.preventDefault();
      const docs = {
        id: this.state.id,
        accountID: this.state.accountID,
        firstName: this.state.firstName,
        competencies: this.state.competencies,
        active: this.state.competencies
      };
      axios.post(url, docs)
        .then(request => {
          console.log(request);
          console.log(request.data);
        })
    }
*/
  render() {
    return (
      <div>
        <Form inline onSubmit={this.handleSubmit}>
          <FormGroup>
            <ControlLabel>NIK</ControlLabel>
            <FormControl type="text" placeholder="NIK" />
          </FormGroup>{' '}
          <FormGroup>
            <ControlLabel>NPWP</ControlLabel>{' '}
            <FormControl type="text" placeholder="NPWP" />
          </FormGroup>
        </Form><p />
        <Form>
          <FormGroup>
            <ControlLabel>Nama</ControlLabel>{' '}
            <FormControl type="text" placeholder="NPWP" />
          </FormGroup>
        </Form>
        <Form inline>
          <FormGroup>
            <ControlLabel>Tempat</ControlLabel>
            <FormControl type="text" placeholder="NIK" />
          </FormGroup>{' '}
          <FormGroup>
            <ControlLabel>Tanggal Lahir</ControlLabel>{' '}
            <FormControl type="date" placeholder="NPWP" />
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <ControlLabel>Alamat</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Alamat" />
          </FormGroup>
        </Form>
        <Form inline>
          <FormGroup>
            <ControlLabel>Jenis kelamin</ControlLabel>
            <FormControl componentClass="select" placeholder="Jenis Kelamin">
              <option value="pria">Pria</option>
              <option value="Wanita">Wanita</option>
            </FormControl>
          </FormGroup>{' '}
          <FormGroup>
            <ControlLabel>Keahlian</ControlLabel>{' '}
            <FormControl type="text" placeholder="Keahlian" />
          </FormGroup>
        </Form>
        <Form inline>
          <FormGroup>
            <ControlLabel>Status Sertifikasi</ControlLabel>
            <FormControl componentClass="select" placeholder="Jenis Kelamin">
              <option value="Aktif">Aktif</option>
              <option value="Tidak Aktif">Tidak AKtif</option>
            </FormControl>
          </FormGroup>{' '}
          <FormGroup>
            <ControlLabel>Jadwal Asesor</ControlLabel>{' '}
            <FormControl type="date" placeholder="Jadwal Asesor" />
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default FormInput;
import React, { Component } from 'react';
import { Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

class FormInput extends Component {
  render() {
    return (
      <form>
        <Form inline>
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
      </form>
    )
  }
}

export default FormInput;
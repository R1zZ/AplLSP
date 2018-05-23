import React, { Component } from "react";
import { Table } from "react-bootstrap";

import axios from 'axios';

const url = `http://192.168.10.234:9000/assesors`
class Asesor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        /*        id: '',
                NPWP: '',
                nama: '',
                tempatlahir: '',
                tgl_lahir: '',
                alamat: '',
                jk: '',
                keahlian: '',
                status: '',
                jdwal_asesor: ''
        */
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
      [event.target.id]: event.target.value
    });
  }
  /*  handleSubmit = event => {
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
    }*/

  componentWillMount() {
    axios.get(url)
      .then(request => {
        //console.log(request);
        this.setState({
          payload: request.data.rows
        });
      })
  }

  render() {
    console.log(this.state.payload);
    return (
      <div className="content">
        <Table responsive>
          <thead>
            <tr>
              <th>id</th>
              <th>NPWP</th>
              <th>Nama</th>
              <th>Tempat Lahir</th>
              <th>Tanggal Lahir</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.payload.map(({
                id,
                accountID,
                firstName,
                competencies,
                active
              }, key) => {
                return (
                  <tr key={key}>
                    <td>{id}</td>
                    <td>{accountID}</td>
                    <td>{firstName}</td>
                    <td>{competencies}</td>
                    <td>{active}</td>
                    <td>Tombol edit</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Asesor;

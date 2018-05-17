import React, { Component } from "react";
//import { Grid, Row, Col } from "react-bootstrap";

//import Card from "components/Card/Card.jsx";
import FormInputs from 'components/FormInput/FormInputs.jsx'
import ListNilai from 'components/FormInput/ListNilai.jsx';
class Asesor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nilai: []
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentDidMount() {
    this.getNilai();
  }

  getNilai() {
    return this.state.nilai
  }

  onAdd(nik, nama, tempatLahir, tgl, almt, npwp, jk, keahlian, stts, jdwl) {
    const nilai = this.getNilai();
    nilai.push({
      nik,
      nama,
      tempatLahir,
      tgl,
      almt,
      npwp,
      jk,
      keahlian,
      stts,
      jdwl
    });

    this.setState({ nilai });
  }

  onDelete(nik) {
    const nilai = this.getNilai();
    const filterNilai = nilai.filter(nilai => {
      return nilai.nik !== nik;
    });
    this.setState({ nilai: filterNilai });
  }

  onEditSubmit(nik, nama, tempatLahir, tgl, almt, npwp, jk, keahlian, stts, jdwl, originalName) {
    let nilai = this.getNilai();
    nilai = nilai.map(nilai => {
      if (nilai.nik === originalName) {
        nilai.nik = nik;
        nilai.nama = nama;
        nilai.tempatLahir = tempatLahir;
        nilai.tgl = tgl;
        nilai.almt = almt;
        nilai.npwp = npwp;
        nilai.jk = jk;
        nilai.keahlian = keahlian;
        nilai.stts = stts;
        nilai.jdwl = jdwl;
      }
      return nilai;
    });
    this.setState({ nilai });
  }
  render() {
    return (
      <div className="content">

        <div className="App">
          <FormInputs
            onAdd={this.onAdd}
          />
          {
            this.state.nilai.map(nilai => {
              return (
                <ListNilai
                  key={nilai.nik}
                  nik={nilai.nik}
                  nama={nilai.nama}
                  tempatLahir={nilai.tempatLahir}
                  tgl={nilai.tgl}
                  almt={nilai.almt}
                  npwp={nilai.npwp}
                  jk={nilai.jk}
                  keahlian={nilai.keahlian}
                  stts={nilai.stts}
                  jdwl={nilai.jdwl}
                  onDelete={this.onDelete}
                  onEditSubmit={this.onEditSubmit}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Asesor;

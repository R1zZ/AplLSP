import React, { Component } from "react";

export class FormInputs extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onAdd(
      this.nik.value,
      this.nama.value,
      this.temptl.value,
      this.tgllahir.value,
      this.alamat.value,
      this.npwp.value,
      this.jk.value,
      this.keahlian.value,
      this.statusasesor.value,
      this.jdwlasesor.value
    );
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          placeholder="NIK"
          ref={nik => this.nik = nik}
        />
        <input
          placeholder="Nama"
          ref={nama => this.nama = nama}
        />
        <input
          placeholder="tempat Lahir"
          ref={temptl => this.temptl = temptl}
        />
        <input
          type="date"
          placeholder="tanggal Lahir"
          ref={tgllahir => this.tgllahir = tgllahir}
        />
        <input
          placeholder="alamat"
          ref={alamat => this.alamat = alamat}
        />
        <input
          placeholder="NPWPr"
          ref={npwp => this.npwp = npwp}
        />

        <button>Tambah</button>
      </form>
    )
  }
}

export default FormInputs;

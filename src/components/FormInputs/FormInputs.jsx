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
      this.tempatLahir.value,
      this.tgl.value
    );
    this.nik.value = '';
    this.nama.value = '';
    this.tempatLahir.value = '';
    this.tgl.value = '';
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          placeholder="NIK"
          ref={nik => this.nik = nik}
        /><p />
        <input
          placeholder="Nama"
          ref={nama => this.nama = nama}
        /><p />
        <input
          placeholder="Tempat Lahir"
          ref={tempatLahir => this.tempatLahir = tempatLahir}
        /><p />
        <input
          type="date"
          placeholder="Tanggal Lahir"
          ref={tgl => this.tgl = tgl}
        /><p />
        <button>Tambah</button>
      </form>
    )
  }
}

export default FormInputs;

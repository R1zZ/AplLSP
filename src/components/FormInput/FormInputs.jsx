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
      this.tgl.value,
      this.almt.value,
      this.npwp.value,
      this.jk.value,
      this.keahlian.value,
      this.stts.value,
      this.jdwl.value
    );
    this.nik.value = '';
    this.nama.value = '';
    this.tempatLahir.value = '';
    this.tgl.value = '';
    this.almt.value = '';
    this.npwp.value = '';
    this.jk.value = '';
    this.keahlian.value = '';
    this.stts.value = '';
    this.jdwl.value = '';
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
      <label>NIK</label>
        <input
          placeholder="NIK"
          ref={nik => this.nik = nik}
        /><p />
        <label>Nama Asesor</label>
        <input
          placeholder="Nama"
          ref={nama => this.nama = nama}
        /><p />
        <label>Tempat Lahir</label>
        <input
          placeholder="Tempat Lahir"
          ref={tempatLahir => this.tempatLahir = tempatLahir}
        /><p />
        <label>Tanggal Lahir</label>
        <input
          type="date"
          ref={tgl => this.tgl = tgl}
        /><p />
        <label>Alamat Asesor</label>
        <input
          placeholder="alamat"
          ref={almt => this.almt = almt}
        /><p />
        <label>No NPWP</label>
        <input
          placeholder="NPWP"
          ref={npwp => this.npwp = npwp}
        /><p />
        <label>
          Jenis Kelamin
          <select ref={jk => this.jk = jk} >
            <option value="Pria">Pria</option>
            <option value="Wanita">Wanita</option>
          </select>
        </label>
        <p />
        <input
          placeholder="Keahlian"
          ref={keahlian => this.keahlian = keahlian}
        /><p />
        <label>
          Status Asesor
          <select ref={stts => this.stts = stts} >
            <option value="Aktif">Aktif</option>
            <option value="Tidak Aktif">Tidak Aktif</option>
          </select>
        </label>
        <p />
        <label>Jadwal Asesor</label>
        <input
          type="date"
          ref={jdwl => this.jdwl = jdwl}
        /><p />
        <button>Tambah</button>
      </form>
    )
  }
}

export default FormInputs;

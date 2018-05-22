import React, { Component } from "react";
import 'components/css/Form/Form.css';


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
      <div className="container-contact100">
        <div className="wrap-contact100">
          <form className="contact100-form validate-form" onSubmit={this.onSubmit}>
            <span className="contact100-form-title">
              Input Asesor
				</span>
            <label className="label-input100" >NIK *</label>
            <div className="wrap-input100">
              <input type="text" name="nik" placeholder="NIK" ref={nik => this.nik = nik} />
            </div>

            <label className="label-input100" >Nama *</label>
            <div className="wrap-input100">
              <input type="text" name="nama" placeholder="Name of Asesor" ref={nama => this.nama = nama} />
              <span className="focus-input100"></span>
            </div>


            <label className="label-input100" >Tempat Lahir *</label>
            <div className="wrap-input100">
              <input type="text" name="tempatLahir" placeholder="Tempat Lahir" ref={tempatLahir => this.tempatLahir = tempatLahir} />
              <span className="focus-input100"></span>
            </div>
            <label className="label-input100" >Tanggal Lahir *</label>
            <div className="wrap-input100">
              <input type="date" name="tgl" placeholder="Tanggal Lahir" ref={tgl => this.tgl = tgl} />
              <span className="focus-input100"></span>
            </div>

            <label className="label-input100" >Alamat *</label>
            <div className="wrap-input100">
              <input type="text" name="almt" placeholder="Alamat" ref={almt => this.almt = almt} />
              <span className="focus-input100"></span>
            </div>

            <label className="label-input100">NPWP</label>
            <div className="wrap-input100">
              <input type="text" name="npwp" placeholder="NPWP" ref={npwp => this.npwp = npwp} />
              <span className="focus-input100"></span>
            </div>

            <label className="label-input100">Jenis Kelamin</label>
            <div className="wrap-input100">
              <select ref={jk => this.jk = jk} className="selection-2 select2-hidden-accessible">
                <option value="Pria">Pria</option>
                <option value="Wanita">Wanita</option>
              </select>
              <span className="focus-input100"></span>
            </div>

            <label className="label-input100">Keahlian</label>
            <div className="wrap-input100 rs1">
              <input type="text" name="keahlian" placeholder="Keahlian Asesor" ref={keahlian => this.keahlian = keahlian} />
              <span className="focus-input100"></span>
            </div>

            <label className="label-input100">Status Asesor *</label>
            <div className="wrap-input100">
              <select ref={stts => this.stts = stts} >
                <option value="Aktif">Aktif</option>
                <option value="TdkAktif">Tidak Aktif</option>
              </select>
              <span className="focus-input100"></span>
            </div>
            <label className="label-input100">Jadwal Asessor</label>
            <div className="wrap-input100">
              <input type="date" name="jdwl" placeholder="Jadwal" ref={jdwl => this.jdwl = jdwl} />
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
        </div>
      </div>
    )
  }
}

export default FormInputs;

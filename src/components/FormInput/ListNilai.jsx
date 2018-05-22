import React, { Component } from 'react';
import 'components/css/Form/Form.css';
import {Table} from 'react-bootstrap';
const nilai = [];

localStorage.setItem('nilai', JSON.stringify(nilai));
class ListNilai extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false
        };
        this.state = {
            nilai: JSON.parse(localStorage.getItem('nilai'))
        };

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }

    onDelete() {
        const { onDelete, nik } = this.props;
        onDelete(nik);
    }

    onEdit() {
        this.setState({ isEdit: true });
    }

    onEditSubmit(event) {
        event.preventDefault();
        this.props.onEditSubmit(
            this.nik.value,
            this.nama.value,
            this.tempatLahir.value,
            this.tgl.value,
            this.almt.value,
            this.npwp.value,
            this.jk.value,
            this.keahlian.value,
            this.stts.value,
            this.jdwl.value,
            this.props.nik
        );
        this.setState({ isEdit: false });
    }

    render() {
        const { nik, nama, tempatLahir, tgl, almt, npwp, jk, keahlian, stts, jdwl } = this.props;
        return (
            <div>
                {
                    this.state.isEdit ? (
                        <form className="contact100-form validate-form" onSubmit={this.onEditSubmit}>
                            <span className="contact100-form-title">
                                Contact Us
                            </span>
                            <label className="label-input100" >NIK *</label>
                            <div className="wrap-input100">
                                <input type="text" name="nik" placeholder="NIK" ref={nik => this.nik = nik} defaultValue={nik} />
                                <span className="focus-input100"></span>
                            </div>

                            <label className="label-input100" >Nama *</label>
                            <div className="wrap-input100">
                                <input type="text" name="nama" placeholder="Name of Asesor" ref={nama => this.nama = nama} defaultValue={nama} />
                                <span className="focus-input100"></span>
                            </div>


                            <label className="label-input100" >Tempat Tanggal Lahir *</label>
                            <div className="wrap-input100 rs1">
                                <input type="text" name="tempatLahir" placeholder="Tempat Lahir" ref={tempatLahir => this.tempatLahir = tempatLahir} defaultValue={tempatLahir} />
                                <span className="focus-input100"></span>
                            </div>
                            <div className="wrap-input100 rs1">
                                <input type="date" name="tgl" placeholder="Tanggal Lahir" ref={tgl => this.tgl = tgl} defaultValue={tgl} />
                                <span className="focus-input100"></span>
                            </div>

                            <label className="label-input100" >Alamat *</label>
                            <div className="wrap-input100">
                                <input type="text" name="almt" placeholder="Alamat" ref={almt => this.almt = almt} defaultValue={almt} />
                                <span className="focus-input100"></span>
                            </div>

                            <label className="label-input100">NPWP</label>
                            <div className="wrap-input100">
                                <input type="text" name="npwp" placeholder="NPWP" ref={npwp => this.npwp = npwp} defaultValue={npwp} />
                                <span className="focus-input100"></span>
                            </div>

                            <label className="label-input100">Jenis Kelamin</label>
                            <div className="wrap-select">
                                <select ref={jk => this.jk = jk} defaultValue={jk}>
                                    <option value="Pria">Pria</option>
                                    <option value="Wanita">Wanita</option>
                                </select>
                                <span className="focus-input100"></span>
                            </div>

                            <label className="label-input100">Keahlian</label>
                            <div className="wrap-input100 rs1">
                                <input type="text" name="keahlian" placeholder="Keahlian Asesor" ref={keahlian => this.keahlian = keahlian} defaultValue={keahlian}/>
                                <span className="focus-input100"></span>
                            </div>

                            <label className="label-input100">Status Asesor *</label>
                            <div className="wrap-select">
                                <select ref={stts => this.stts = stts} defaultValue={stts}>
                                    <option value="Pria">Pria</option>
                                    <option value="Wanita">Wanita</option>
                                </select>
                                <span className="focus-input100"></span>
                            </div>
                            <label className="label-input100">Jadwal Asessor</label>
                            <div className="wrap-input100 rs1">
                                <input type="date" name="jdwl" placeholder="Jadwal" ref={jdwl => this.jdwl = jdwl} defaultValue={jdwl} />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="container-contact100-form-btn">
                                <button className="contact100-form-btn">
                                    <span>
                                        Submit
                            </span>
                                </button>
                            </div>
                        </form>) : (
                            <div className="content">
                                <Table>
                                    <thead>
                                        <tr>
                                            <td>NIK</td>
                                            <td>Nama</td>
                                            <td>Tempat Lahir</td>
                                            <td>Tanggal Lahir</td>
                                            <td>Alamat</td>
                                            <td>NPWP</td>
                                            <td>Jenis Kelamin</td>
                                            <td>Keahlian</td>
                                            <td>Status</td>
                                            <td>Jadwal Asessor</td>
                                            <td>Action</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            [nilai].map((data, key) => {
                                                return (
                                                    <tr key={key}>
                                                        <td>{nik}</td>
                                                        <td>{nama}</td>
                                                        <td>{tempatLahir}</td>
                                                        <td>{tgl}</td>
                                                        <td>{almt}</td>
                                                        <td>{npwp}</td>
                                                        <td>{jk}</td>
                                                        <td>{keahlian}</td>
                                                        <td>{stts}</td>
                                                        <td>{jdwl}</td>
                                                        <td>
                                                            <button onClick={this.onDelete}>Delete</button>
                                                            <button onClick={this.onEdit}>Edit</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </Table>
                            </div>
                        )
                }

            </div>
        )
    }
}

export default ListNilai;
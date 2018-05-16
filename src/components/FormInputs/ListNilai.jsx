import React, { Component } from 'react';
import { button, Table } from 'react-bootstrap';

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
            this.props.nik
        );
        this.setState({ isEdit: false });
    }

    render() {
        const { nik, nama, tempatLahir, tgl, almt, npwp } = this.props;
        return (
            <div>
                {
                    this.state.isEdit ? (
                        <form onSubmit={this.onEditSubmit}>
                            <input
                                placeholder="nik"
                                ref={nik => this.nik = nik} defaultValue={nik}
                            />
                            <input
                                placeholder="nama"
                                ref={nama => this.nama = nama} defaultValue={nama}
                            />
                            <input
                                placeholder="tempat lahir"
                                ref={tempatLahir => this.tempatLahir = tempatLahir} defaultValue={tempatLahir}
                            />
                            <input
                                type="date"
                                ref={tgl => this.tgl = tgl} defaultValue={tgl}
                            />
                            <input
                                placeholder="alamat"
                                ref={almt => this.almt = almt} defaultValue={almt}
                            />
                            <input
                                placeholder="NPWP"
                                ref={npwp => this.npwp = npwp} defaultValue={npwp}
                            />
                            <button>Save</button>
                        </form>
                    ) : (
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
                                            <td>Action</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{nik}</td>
                                            <td>{nama}</td>
                                            <td>{tempatLahir}</td>
                                            <td>{tgl}</td>
                                            <td>{almt}</td>
                                            <td>{npwp}</td>
                                            <td>
                                                <button onClick={this.onDelete}>Delete</button>
                                                <button onClick={this.onEdit}>Edit</button>
                                            </td>
                                        </tr>
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
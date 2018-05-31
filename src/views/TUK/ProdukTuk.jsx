import React from 'react';

//import axios from 'axios';

export default class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      datas: []
    }
  }

  fetchData(){
    fetch('http://sertimedia.com/api/v1/jadwal/1?api_key=46xYSrCEfwPeQfW1KCT7')
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.result.map(data => (
      {
        id: `${data.produk.id}`,
        nama: `${data.produk.nama}` ,
        harga: `${data.produk.harga}`,
        berlaku: `${data.produk.berlaku}`,
        deskripsi: `${data.produk.deskripsi}`
      }
    )))
    .then(datas => this.setState({
      datas,
      isLoading: false
    }))
    .catch(error => console.log('gagal parsing', error))
  }
  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        {this.state.produk}
      </div>
    )
  }
}
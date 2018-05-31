import React from 'react';

//import axios from 'axios';

export default class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        id:'',
        nama:'',
        harga:'',
        berlaku:'',
        deskripsi: ''
      },
      payload: []
    };
  }

  componentDidMount() {
    fetch(`http://sertimedia.com/api/v1/jadwal/1?api_key=46xYSrCEfwPeQfW1KCT7`)
    .then(results => {
      return results.json();
    }).then(data => {
      let produk = data.results.map((dat) => {
        return (
          <div key={dat.results}>
            <li>{dat.produk.nama}</li>
          </div>
        )
      })
      this.setState({produk: produk})
      console.log("hasil", this.state.produk)
    })
  }

  render() {
    return (
      <div>
        {this.state.produk}
      </div>
    )
  }
}
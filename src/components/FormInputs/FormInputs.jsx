import React, { Component } from "react";

export class FormInputs extends Component {
  constructor(props){
    super(props)

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    event.preventDefault();
    this.props.onAdd(this.firstName.value, this.lastName.value);
    this.firstName.value = '';
    this.lastName.value = '';
  }
  render() {
    return(
      <form onSubmit={this.onSubmit}>
        <input 
          placeholder="Nama Depan"
          ref={firstName => this.firstName = firstName}
        /><p/>
        <input
          placeholder="Nama Belakang"
          ref={lastName => this.lastName= lastName}
        /><p/>
        <button>Tambah</button>
      </form>
    )
  }
}

export default FormInputs;

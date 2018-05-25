import React, { Component } from "react";
import { Button, Table, Glyphicon, FormControl, FormGroup, ControlLabel } from "react-bootstrap";
import axios from 'axios';

const url = `http://sertimedia.com/api/v1/jadwal/1/sertifikat?api_key=46xYSrCEfwPeQfW1KCT7`;
const payload = [];
class Sertifikasi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    };
    this.state = {

    }

    //this.onAdd = this.onAdd.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  onEdit() {
    this.setState({ isEdit: true })
  }

  getNilai() {
    return this.state.payload
  }

  onEditSubmit = event => {
    event.preventDefault();

    const data = { payload: this.state.name }

    axios.patch(url, { data })
      .then(request => {
        console.log(request);
        console.log(request.data)
        /*        this.setState({
          payload: request.data.data
        });
*/      })
  };

  /*  componentDidMount() {
   }
  */
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    console.log(this.state.payload);
    const {
      admin_id,
      name,
      username,
      password,
      email,
    } = this.props;
    return (
      <div className="content" align="center">
        {
          this.state.isEdit ? (
            <form onSubmit={this.handleSubmit}>
              <FormGroup>
                <ControlLabel>ID Admin</ControlLabel>{' '}
                <FormControl type="text" placeholder="admin_id" ref={admin_id => this.admin_id = admin_id} defaultValue={admin_id} />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Nama</ControlLabel>{' '}
                <FormControl type="text" placeholder="name" ref={name => this.name = name} defaultValue={name} />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Username</ControlLabel>{' '}
                <FormControl type="text" placeholder="username" ref={username => this.username = username} defaultValue={username} />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Password</ControlLabel>{' '}
                <FormControl type="password" placeholder="password" ref={password => this.password = password} defaultValue={password} />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Email</ControlLabel>{' '}
                <FormControl type="email" placeholder="email" ref={email => this.email = email} defaultValue={email} />
              </FormGroup>

              <Button type="submit">Submit</Button>
            </form>
          ) : (
              <Table responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>UserName</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    //this.state.
                    [payload].map((data, key) => {
                      return (
                        <tr key={key}>
                          <td>{admin_id}</td>
                          <td>{name}</td>
                          <td>{username}</td>
                          <td>{password}</td>
                          <td>{email}</td>
                          <td>
                            <Button bsSize="xsmall" onClick={this.onEdit}>
                              <Glyphicon glyph="pencil" /> Edit
                                          </Button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </Table>
            )
        }
      </div >
    );
  }
}


export default Sertifikasi;

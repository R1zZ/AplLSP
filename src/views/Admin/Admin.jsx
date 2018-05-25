import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FormAdmin from './FormAdmin';
import EditAdmin from './EditAdmin';
import axios from 'axios';
import { Card } from "components/Card/Card.jsx";
import 'components/css/Form/Form.css';

const muiThemebtn = getMuiTheme();
const url = `http://192.168.10.123:3000/admin`;
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: {
        admin_id: '',
        name: '',
        username: '',
        password: '',
        email: ''
      },
      payload: []
    };

    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }



  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });//memanggil semua data pada DB
  }

  handleSubmit = event => {
    event.preventDefault();
    //pendeklarasian state di DB
    const docs = {
      admin_id: this.state.admin_id,
      name: this.state.name,
      username: this.state.username,
      password: this.state.username,
      email: this.state.email
    };
    console.log(docs);
    axios.post(url, docs)
      .then(request => {
        console.log(request);
        console.log(request.data);
      })
  }
  componentDidMount() {
    axios.get(url)
      .then(request => {
        this.setState({
          payload: request.data.payload // setState berfungsi untuk manipulasi array  
        });
      })
  }
  getNilai() {
    return this.state.payload
  }
  onAdd(
    admin_id,
    name,
    username,
    password,
    email){
      const payload = this.getNilai();
      payload.push({
        admin_id,
        name,
        username,
        password,
        email
      });

      this.setState({payload})
    }

    onEditSubmit(
      admin_id,
      name,
      username,
      password,
      email,
      originalId) {
      let payload = this.getNilai();
      payload = payload.map(payload => {
        if (payload.admin_id === originalId) {
          payload.admin_id = admin_id;
          payload.name = name;
          payload.username = username;
          payload.password = password;
          payload.email = email;
        }
        return payload;
      });
      this.setState({ payload });
    }
  
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />
    ];
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Tambah Data Admin"
                content={
                  <MuiThemeProvider muiTheme={muiThemebtn}>
                    <div>
                      <RaisedButton label="Add" onClick={this.handleOpen} />
                      <Dialog
                        title="Input Data Asesor"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                      //autoScrollBodyContent={true}
                      >
                        <FormAdmin
                          onAdd={this.onAdd}
                        />
                      </Dialog>
                    </div>
                  </MuiThemeProvider>
                }
              />
              <Card
                title="List Admin"
                content={
                  this.state.payload.map(payload => {
                    return(
                      <EditAdmin
                      key={payload.admin_id}
                      admin_id={payload.admin_id}
                      name={payload.name}
                      username={payload.username}
                      password={payload.password}
                      email={payload.email}
                      onEditSubmit={this.onEditSubmit}
                    />  
                    );
                  })
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Admin;

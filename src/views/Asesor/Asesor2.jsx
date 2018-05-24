import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FormAsesor from './FormAsesor.jsx';
import ListAsesor from './ListAsesor.jsx'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Card from "components/Card/Card.jsx";

const muiThemebtn = getMuiTheme();
class Asesor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      nilai:[]
    };

    this.onAdd = this.onAdd.bind(this);
  }

  onAdd(nik, nama, tempatLahir, tgl, almt, npwp, jk, keahlian, stts, jdwl) {
    const nilai = this.getNilai();
    nilai.push({
      nik,
      nama,
      tempatLahir,
      tgl,
      almt,
      npwp,
      jk,
      keahlian,
      stts,
      jdwl
    });

    this.setState({ nilai });
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
    ];
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={3}>
              <Card
                title="Tambah Data Asesor"
                content={
                    <MuiThemeProvider muiTheme={muiThemebtn}>
                  <div>
                      <center><RaisedButton label="Add" onClick={this.handleOpen} /></center>
                      <Dialog
                        title="Tambah Asesor"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                      >
                        <FormAsesor
                          onAdd={this.onAdd}
                        />
                  </Dialog>
                  </div>
                    </MuiThemeProvider>
                }
              />
            </Col>
            <Col md={12}>
              <Card
                title="List Asesor"
                content={
                  <div>
                        <ListAsesor />
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


export default Asesor;

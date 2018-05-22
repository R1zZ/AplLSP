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
  state = {
    open: false,
  };

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
      <FlatButton
        label="Submit"
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
                  <div>
                    <MuiThemeProvider muiTheme={muiThemebtn}>
                      <center><RaisedButton label="Add" onClick={this.handleOpen} /></center>
                      <Dialog
                        title="Tambah Asesor"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                      >
                        <FormAsesor />
                  </Dialog>
                    </MuiThemeProvider>
                  </div>
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

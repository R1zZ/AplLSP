import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FormInput from './FormInput.jsx';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Card from "components/Card/Card.jsx";

const muiThemebtn = getMuiTheme();
class Sertifikasi extends Component {
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
                title="Tambah Data Sertifikasi"
                content={
                    <MuiThemeProvider muiTheme={muiThemebtn}>
                  <div>
                      <center><RaisedButton label="Add" onClick={this.handleOpen} /></center>
                      <Dialog
                        title="Isi dari Dialog"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                      >
                        <FormInput />
                  </Dialog>
                  </div>
                    </MuiThemeProvider>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


export default Sertifikasi;

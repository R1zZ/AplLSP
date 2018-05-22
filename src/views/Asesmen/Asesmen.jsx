import React, { Component } from "react";
import { Grid, Row, Col, Form, FormControl, FormGroup } from "react-bootstrap";

import Card from "components/Card/Card.jsx";

class Asesmen extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                content={
                  <Form inline>
                    <FormGroup>
                      <ControlLabel>NIK</ControlLabel>
                      <FormCotnrol type="text" placeholder="NIK" />
                    </FormGroup>{' '}
                    <Form inline>
                    <FormGroup>
                      <ControlLabel>NPWP</ControlLabel>
                      <FormCotnrol type="text" placeholder="NPWP" />
                    </FormGroup>
                  </Form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Asesmen;

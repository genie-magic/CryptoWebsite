import React from 'react';
import { Input, Button, Container, Row, Col, FormGroup } from 'reactstrap';
import './ResetPassword.css';

class ResetPassword extends React.Component {
  render() {
    return (
      <div className="reset-password">
        <div className="Aligner-item Aligner-item--top" />
        <div className="Aligner-item text-center w-100">
          <Container>
            <FormGroup>
              <Row>
                <Col sm={6}>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Enter New Password"
                    bsSize="lg"
                  />
                </Col>
                <Col sm={6}>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Confirm New Password"
                    bsSize="lg"
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Button className="login-button float-right" size="lg">
                Submit
              </Button>
            </FormGroup>
          </Container>
        </div>
        <div className="Aligner-item Aligner-item--bottom" />
      </div>
    );
  }
}

export default ResetPassword;

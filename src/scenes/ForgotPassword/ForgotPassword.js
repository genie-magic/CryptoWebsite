import React from 'react';
import { Input, Button, FormGroup, Label, Container } from 'reactstrap';
import './ForgotPassword.css';

class ForgotPassword extends React.Component {
  render() {
    return (
      <div className="forgot-password">
        <div className="Aligner-item Aligner-item--top" />
        <div className="Aligner-item text-center">
          <Container>
            <FormGroup>
              <Label className="enter-email-label" for="exampleEmail">
                Enter the email ID to receive your password reset link
              </Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter Email"
                bsSize="lg"
              />
            </FormGroup>
            <Button className="login-button float-right" size="lg">
              Submit
            </Button>
          </Container>
        </div>
        <div className="Aligner-item Aligner-item--bottom" />
      </div>
    );
  }
}

export default ForgotPassword;

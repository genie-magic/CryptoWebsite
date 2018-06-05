import React from 'react';
import { Input, Button, FormGroup, Label, Container } from 'reactstrap';
import './ChangePassword.css';

class ChangePassword extends React.Component {
  render() {
    return (
      <div className="change-password">
        <div className="Aligner-item Aligner-item--top" />
        <div className="Aligner-item text-center">
          <Container>
            <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder="Enter Existing Password"
                bsSize="lg"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder="Enter New Password"
                bsSize="lg"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder="Confirm New Password"
                bsSize="lg"
              />
            </FormGroup>
            <Button className="submit-button float-right" size="lg">
              Submit
            </Button>
          </Container>
        </div>
        <div className="Aligner-item Aligner-item--bottom" />
      </div>
    );
  }
}

export default ChangePassword;

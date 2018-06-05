import React from 'react';
import { Input, Row, Col, Button, FormText, FormGroup } from 'reactstrap';
import './LoginSection.css';

class LoginSection extends React.Component {
  render() {
    return (
      <div className="login-section">
        <div className="title">Sign In</div>
        <FormGroup>
          <Input type="email" name="email" placeholder="Email" bsSize="lg" />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            bsSize="lg"
          />
        </FormGroup>
        <FormGroup row>
          <Col xs={4}>
            <Button color="primary" size="lg">
              Captcha
            </Button>
          </Col>
          <Col xs={8}>
            <Input
              type="text"
              name="captcha"
              placeholder="Enter Captcha"
              bsSize="lg"
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Button className="login-button float-right" size="lg">
            Login
          </Button>
          <div className="clearfix" />
          <FormText color="muted" className="float-right">
            Forgot Password?
          </FormText>
        </FormGroup>
      </div>
    );
  }
}

export default LoginSection;

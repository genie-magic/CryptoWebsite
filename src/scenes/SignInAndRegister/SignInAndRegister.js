import React from 'react';
import Flexbox from 'flexbox-react';
import './SiginInAndRegister.css';
import LoginSection from './sections/LoginSection/LoginSection';
import RegisterSection from './sections/RegisterSection/RegisterSection';
import { Row, Col } from 'reactstrap';
class SignInAndRegister extends React.Component {
  render() {
    return (
      <Row>
        <Col md="6">
          <LoginSection />
        </Col>
        <Col md="6">
          <RegisterSection />
        </Col>
      </Row>
    );
  }
}

export default SignInAndRegister;

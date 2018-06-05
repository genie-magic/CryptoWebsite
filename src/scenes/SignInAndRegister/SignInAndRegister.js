import React from 'react';
import Flexbox from 'flexbox-react';
import './SiginInAndRegister.css';
import LoginSection from './sections/LoginSection/LoginSection';
import RegisterSection from './sections/RegisterSection/RegisterSection';
import { Row, Col } from 'reactstrap';
class SignInAndRegister extends React.Component {
  render() {
    return (
      <div className="signin-and-register">
        <div className="Aligner-item Aligner-item--top" />
        <div className="Aligner-item text-center">
          <Row>
            <Col md="6">
              <LoginSection />
            </Col>
            <Col md="6">
              <RegisterSection />
            </Col>
          </Row>
        </div>
        <div className="Aligner-item Aligner-item--bottom" />
      </div>
    );
  }
}

export default SignInAndRegister;

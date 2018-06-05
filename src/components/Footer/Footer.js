import React from 'react';
import Flexbox from 'flexbox-react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css';
class Footer extends React.Component {
  render() {
    return (
      <Flexbox element="footer" height="80px" className="footer">
        <Container fluid={true}>
          <Row>
            <Col xs="4">Copyright © 2018 Guma Fund. All rights reserved.</Col>
            <Col xs="4">3 Edword St, George Town, Cayman Islands</Col>
            <Col xs="4">Terms of Service | Privacy Policy</Col>
          </Row>
        </Container>
      </Flexbox>
    );
  }
}

export default Footer;

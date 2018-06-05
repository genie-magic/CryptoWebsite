import React from 'react';
import './StatusSection.css';
import { Row, Col, Container } from 'reactstrap';
import RoundButton from '../../components/RoundButton/RoundButton';
import { Link } from 'react-router-dom';

function DoubleStatusItem(props) {
  let valueClass = 'doubleStatus-value';
  if (props.direction === 'up') {
    valueClass = [valueClass, 'up'].join(' ');
  } else if (props.direction === 'down') {
    valueClass = [valueClass, 'down'].join(' ');
  }
  return (
    <Row className="doubleStatus-item">
      <Col className="doubleStatus-label">{props.label}</Col>
      <Col className={valueClass}>{props.value}</Col>
    </Row>
  );
}

function SingleStatusItem(props) {
  return <div className="single-status-item">{props.value}</div>;
}

function StatusTitle(props) {
  return <div className="status-title">{props.label}</div>;
}

class StatusSection extends React.Component {
  render() {
    return (
      <div className="status-section">
        <Container>
          <Row>
            <Col md={{ size: 4, offset: 4 }}>
              <Link className="signin-button" to="/login">
                SIGN IN
              </Link>
              <Link className="register-button" to="/register">
                REGISTER
              </Link>
            </Col>
          </Row>
          <Row className="status-block">
            <Col md="4">
              <StatusTitle label="GNA Token Status" />
              <DoubleStatusItem label="Total" value="55,000,000" />
              <DoubleStatusItem label="Sold" value="97224" />
              <DoubleStatusItem label="Remaining" value="54902776" />
            </Col>
            <Col md="4">
              <StatusTitle label="Assets Under Management" />
              <SingleStatusItem value="$261,723" />
              <StatusTitle label="Guna Token Price" />
              <SingleStatusItem value="$1.09" />
            </Col>
            <Col md="4">
              <StatusTitle label="GNA Price Movement" />
              <DoubleStatusItem label="24 hours" value="3.47%" direction="up" />
              <DoubleStatusItem label="7 Days" value="5.78%" direction="down" />
              <DoubleStatusItem label="30 Days" value="17.58%" direction="up" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default StatusSection;

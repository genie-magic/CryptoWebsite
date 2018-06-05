import React from 'react';
import { Container, Row, Col, FormGroup, Input, Label } from 'reactstrap';
import Flexbox from 'flexbox-react';
import './DashboardSection.css';

const CurrencyDropdown = props => (
  <FormGroup row className="currency-select-container">
    <Label xs={6} className="currency-label" size="lg">
      Currency{' '}
    </Label>
    <Input className="currency-select" type="select">
      <option>Bitcoin(BTC)</option>
      <option>Ethereum(ETH)</option>
      <option>Litecoin(LTC)</option>
    </Input>
  </FormGroup>
);

const TransferRate = props => (
  <div className="transfer-exchange-rate">
    <Row>
      <Col xs={5}>
        <div className="amount">Amount</div>
        <div className="gna-box">1157</div>
        <div className="gna-label">GNA</div>
      </Col>
      <Col xs={2}>
        <span className="fa fa-exchange" />
      </Col>
      <Col xs={5}>
        <div className="gna-box">1157</div>
        <div className="gna-label">GNA</div>
        <div className="to-dollar">Equivalent to: $1300</div>
      </Col>
    </Row>
  </div>
);

class DashboardSection extends React.Component {
  render() {
    return (
      <div className="dashboard-section">
        <div className="Aligner-item Aligner-item--top" />
        <div className="Aligner-item text-center">
          <Container>
            <div className="title">Dashboard</div>
            <div className="balance">
              Balance: 41,159 GNA
              <div className="equivalent">Equivalent to : $44,863</div>
            </div>
            <div className="rate">1 GNA = $1.09</div>
            <Row>
              <Col sm="6">
                <div className="deposit-block">
                  <div className="transparent-div">Deposit</div>
                  <CurrencyDropdown />
                  <TransferRate />
                </div>
              </Col>
              <Col sm="6">
                <div className="withdraw-block">
                  <div className="transparent-div">Withdraw</div>
                  <CurrencyDropdown />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="Aligner-item Aligner-item--bottom" />
      </div>
    );
  }
}

export default DashboardSection;

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Settings.css';
import AccountInfoSection from './sections/AccountInfoSection/AccountInfoSection';
import OtherSettingsSection from './sections/OtherSettingsSection/OtherSettingsSection';
class Settings extends React.Component {
  render() {
    return (
      <div className="settings">
        <div className="Aligner-item Aligner-item--top" />
        <div className="Aligner-item Aligner-item-center text-center w-100">
          <Container>
            <div className="title">Settings</div>
            <Row>
              <Col md="6">
                <AccountInfoSection />
              </Col>
              <Col md="6">
                <OtherSettingsSection />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="Aligner-item Aligner-item--bottom" />
      </div>
    );
  }
}

export default Settings;

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Settings.css';
import AccountInfoSection from './sections/AccountInfoSection/AccountInfoSection';
import OtherSettingsSection from './sections/OtherSettingsSection/OtherSettingsSection';
class Settings extends React.Component {
  render() {
    return (
      <Container className="settings">
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
    );
  }
}

export default Settings;

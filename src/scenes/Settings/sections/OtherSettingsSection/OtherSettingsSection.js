import React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Input, Col } from 'reactstrap';
import './OtherSettingsSection.css';
import RoundedSwitch from '../../components/RoundedSwitch/RoundedSwitch';

class OtherSettingsSection extends React.Component {
  render() {
    return (
      <div className="other-settings-section">
        <FormGroup row>
          <Label className="text-right" xs={6} size="lg">
            2 Factor Authentication{' '}
          </Label>
          <RoundedSwitch />
        </FormGroup>
        <FormGroup row className="currency-select-container">
          <Label xs={6} className="currency-label" size="lg">
            Default Equivalent Currency{' '}
          </Label>
          <Input className="currency-select" type="select">
            <option>US Dollar(USD)</option>
            <option>Indian Rupee(INR)</option>
            <option>Chinese Yen(CNY)</option>
            <option>Japanese Yuan(JPY)</option>
            <option>Euro</option>
          </Input>
        </FormGroup>
        <FormGroup row>
          <Col xs="6">
            <Link className="change-password" to="/changepassword">
              Change password
            </Link>
          </Col>
        </FormGroup>
      </div>
    );
  }
}

export default OtherSettingsSection;

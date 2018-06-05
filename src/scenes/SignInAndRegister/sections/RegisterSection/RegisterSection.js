import React from 'react';
import {
  Input,
  Row,
  Col,
  Button,
  FormText,
  FormGroup,
  Form,
  CustomInput
} from 'reactstrap';
import Flexbox from 'flexbox-react';
import './RegisterSection.css';

class RegisterSection extends React.Component {
  constructor(props) {
    super(props);
    this._onClickUploadKYC = this._onClickUploadKYC.bind(this);
    this.inputKYC = null;
  }

  _onClickUploadKYC(e) {
    e.preventDefault();
    this.inputKYC.click();
  }
  render() {
    return (
      <div className="register-section">
        <div className="title"> Register </div>
        <Form className="position-relative">
          <div className="divider" />
          <Row>
            <Col xs="6">
              <Input type="text" name="first_name" placeholder="First Name" />
            </Col>
            <Col xs="6">
              <Input type="text" name="last_name" placeholder="Last Name" />
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <Input type="text" name="country" placeholder="Country" />
            </Col>
            <Col xs={2}>
              <Input
                type="text"
                name="country"
                placeholder="Country"
                value="+91"
              />
            </Col>
            <Col xs={7}>
              <Input type="numeric" name="country" placeholder="Mobile" />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Input type="text" name="address1" placeholder="Address Line1" />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                name="address2"
                placeholder="Address Line2(Optional)"
              />
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <Input type="text" name="city" placeholder="City" />
            </Col>
            <Col xs="6">
              <Input type="text" name="pin" placeholder="PIN" />
            </Col>
          </Row>
          <Row>
            <input
              className="kyc"
              type="file"
              name="KYC"
              ref={ref => {
                this.inputKYC = ref;
              }}
            />
            <Button
              className="text-center w-100"
              onClick={this._onClickUploadKYC}
            >
              Upload KYC
            </Button>
          </Row>
          <Row>
            <Input type="email" name="email" placeholder="Email" />
          </Row>
          <Row>
            <Input type="password" name="password" placeholder="Password" />
          </Row>
          <Row>
            <Input
              type="password"
              name="password"
              placeholder="Confirm Password"
            />
          </Row>
          <FormGroup>
            <Button className="register-button float-right">Register</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default RegisterSection;

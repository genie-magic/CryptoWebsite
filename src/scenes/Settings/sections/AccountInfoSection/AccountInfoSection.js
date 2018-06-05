import React from 'react';
import { FormGroup } from 'reactstrap';
import './AccountInfoSection.css';
import PhotoUploader from './../../components/PhotoUploader/PhotoUploader';

class AccountInfoSection extends React.Component {
  render() {
    const accountInfo = {
      name: 'Varun Singh',
      balance: '23945 GNA(IRN 12,401)',
      address: '24, Ashaka House Saket, New Delhi, India - 101234',
      phone: '+9186211234765',
      email: 'varun.s@gmail.com'
    };
    return (
      <div className="account-info-section">
        <div className="photo-uploader-container">
          <PhotoUploader />
        </div>
        <div className="account-info-container">
          <FormGroup>{accountInfo.name}</FormGroup>
          <FormGroup>Balance: {accountInfo.balance}</FormGroup>
          <FormGroup>{accountInfo.address}</FormGroup>
          <FormGroup>Phone: {accountInfo.phone}</FormGroup>
          <FormGroup>Email: {accountInfo.email}</FormGroup>
        </div>
      </div>
    );
  }
}

export default AccountInfoSection;

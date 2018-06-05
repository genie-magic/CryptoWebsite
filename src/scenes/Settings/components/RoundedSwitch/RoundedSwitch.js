import React from 'react';
import './RoundedSwtich.css';

class RoundedSwitch extends React.Component {
  render() {
    return (
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round" />
      </label>
    );
  }
}

export default RoundedSwitch;

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './RoundButton.css';

function RenderLink(props) {
  return (
    <Link to={props.to} className={props.className}>
      {props.label}
    </Link>
  );
}

function RenderButton(props) {
  return (
    <Button onClick={props.onClickFunction} className={props.className}>
      {props.label}
    </Button>
  );
}

function ButtonOrLink(props) {
  const isLink = props.isLink;
  if (isLink) {
    return (
      <RenderLink
        to={props.to}
        className={props.className}
        label={props.label}
      />
    );
  } else {
    return (
      <RenderButton
        onClickFunction={props.onClickFunction}
        className={props.className}
        label={props.label}
      />
    );
  }
}
class RoundButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const label = this.props.label;
    const className = ['round-button', this.props.className].join(' ');
    const isLink = this.props.to === '';

    return (
      <ButtonOrLink
        isLink={isLink}
        label={label}
        className={className}
        onCLickFunction={this.props.onClickFunction}
      />
    );
  }
}

RoundButton.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  onClickFunction: PropTypes.func,
  to: PropTypes.string
};

RoundButton.defaultProps = {
  label: 'label',
  className: '',
  onClickFunction: function() {},
  to: ''
};

export default RoundButton;

import React from 'react';

const {
  Component,
  PropTypes
} = React;

const propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  hollow: PropTypes.bool,
  disabled: PropTypes.bool
};

const defaultProps = {
  color: '#00D17A',
  textColor: 'black',
  label: 'Button',
  hollow: false,
  disabled: false
};

class Button extends Component {
  handleClick() {
    if (!this.props.disabled) this.props.onClick();
  }

  render() {
    const style = {
      backgroundColor: !this.props.hollow ? this.props.color || 'transparent' : 'transparent',
      color: this.props.textColor,
      border: `2px solid ${this.props.color}`
    };

    return (
      <div
        className={'Button' + (this.props.disabled ? ' Button--disabled' : '')}
        style={style}
        onClick={this.handleClick.bind(this)}
      >
        {this.props.label}
      </div>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;

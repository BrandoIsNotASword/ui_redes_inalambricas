import React from 'react';

const {
  Component,
  PropTypes
} = React;

const propTypes = {
  placeholder: PropTypes.string,
  inputColor: PropTypes.string,
  textColor: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

const defaultProps = {
  inputColor: 'white',
  textColor: '#424242',
  type: 'text',
  disabled: false,
  onChange: () => {}
};

class Input extends Component {
  focus() {
    this._input.focus();
  }

  getValue() {
    return this._input.value;
  }

  handleChange() {
    if (!this.props.disable) this.props.onChange();
  }

  render() {
    const style = {
      backgroundColor: this.props.inputColor,
      color: this.props.textColor,
      border: '2px solid white'
    };

    return (
      <div
        className={`Input${this.props.disabled ? ' Input--disabled' : ''}`}
        style={style}
      >
        <input
          ref={(ref) => this._input = (ref)}
          className="Input__input"
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.handleChange.bind(this)}
          disabled={this.props.disabled}
        />
      </div>
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;

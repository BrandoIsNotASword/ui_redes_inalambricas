import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { branch } from 'baobab-react/higher-order';

import DashboardActions from '../actions/DashboardActions';
import Input from './Input';
import Button from './Button';

const {
  PropTypes,
  Component
} = React;

const propTypes = {
  redToggle: PropTypes.bool,
  greenToggle: PropTypes.bool,
  blueToggle: PropTypes.bool,
  lampToggle: PropTypes.bool,
  traffic: PropTypes.bool,
  twitterText: PropTypes.string
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.actions = DashboardActions;
  }

  handleClick(buttonName) {
    this.actions.toggleButton(buttonName);
  }

  handleTweet() {
    this.actions.saveTweet(this.refs.twitterInput.getValue());
  }

  render() {
    const classNameToggle = {
      red: this.props.redToggle ? ' Dashboard__button--selected' : '',
      green: this.props.greenToggle ? ' Dashboard__button--selected' : '',
      blue: this.props.blueToggle ? ' Dashboard__button--selected' : ''
    };
    const nameLampToggle = this.props.lampToggle ? 'ON' : 'OFF';
    const trafficMove = {
      style: this.props.traffic ? ' Dashboard__traffic--move' : '',
      text: this.props.traffic ? 'MOVE' : 'STOP'
    };

    return (
      <div className="Dashboard">
        <div className={`Dashboard__traffic${trafficMove.style}`}>
          {trafficMove.text}
        </div>

        <SwipeableViews>
        <div className="Dashboard__section Dashboard__section--rgb">
          <h1 className="Dashboard__title">RGB</h1>
          <div className="Dashboard__buttons">
            <div
              className={`Dashboard__button Dashboard__button--red${classNameToggle.red}`}
              onClick={this.handleClick.bind(this, 'redToggle')}></div>
            <div
              className={`Dashboard__button Dashboard__button--green${classNameToggle.green}`}
              onClick={this.handleClick.bind(this, 'greenToggle')}></div>
            <div
              className={`Dashboard__button Dashboard__button--blue${classNameToggle.blue}`}
              onClick={this.handleClick.bind(this, 'blueToggle')}></div>
          </div>
        </div>

        <div className="Dashboard__section Dashboard__section--lamp">
          <h1 className="Dashboard__title">Lámpara</h1>
          <div className="Dashboard__buttons">
            <div
              className="Dashboard__button"
              onClick={this.handleClick.bind(this, 'lampToggle')}
            >
              {nameLampToggle}
            </div>
          </div>
        </div>

        <div className="Dashboard__section Dashboard__section--twitter">
          <h1 className="Dashboard__title">Twitter</h1>
          <div className="Dashboard__buttons">
            <Input placeholder="Escribe tu #Tweet" ref="twitterInput" />
            <Button label="Enviar" textColor="white" onClick={this.handleTweet.bind(this)} />
          </div>
        </div>
        </SwipeableViews>
      </div>
    );
  }
}

Dashboard.propTypes = propTypes;

export default branch(Dashboard, {
  cursors: {
    redToggle: ['redToggle'],
    greenToggle: ['greenToggle'],
    blueToggle: ['blueToggle'],
    lampToggle: ['lampToggle'],
    twitterText: ['twitterText'],
    traffic: ['traffic']
  }
});

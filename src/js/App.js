import React from 'react';
import ReactDOM from 'react-dom';
import tree from './tree';
import { root } from 'baobab-react/higher-order';
const { Component } = React;

import ChildComponent from './components/ChildComponent';

/* eslint-disable */
import styles from '../styles/main.scss';
/* eslint-enable */

class App extends Component {
  render() {
    return <ChildComponent />;
  }
}

const RootedApp = root(App, tree);

ReactDOM.render(
  <RootedApp />,
  document.getElementById('app')
);

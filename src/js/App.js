import React from 'react';
import ReactDOM from 'react-dom';
import tree from './tree';
import { root } from 'baobab-react/higher-order';
const {
  Component,
  PropTypes
} = React;

import ChildComponent from './components/ChildComponent';
import styles from '../styles/main.scss';

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

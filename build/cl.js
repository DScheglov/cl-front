import React from 'react';
import ReactDOM from 'react-dom';
import App, { init } from '../src';

const mountPoint = global.document.getElementById('app');

init();

ReactDOM.render(
  <App />, mountPoint
);
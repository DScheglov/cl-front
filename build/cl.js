import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src';

const mountPoint = global.document.getElementById('app');

ReactDOM.render(
  <App />, mountPoint
);
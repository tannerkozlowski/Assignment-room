import React from 'react';
import { render } from 'react-dom';

const rootDomEl = document.getElementById('root');

/* eslint-disable no-unused-vars */
let root = null;

const init = () => {
  let Root = require('./components/Root').default;
  root = render(<Root />, rootDomEl);
};

// Hot Module Replacement API
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/Root', () => requestAnimationFrame(init));
}

init();

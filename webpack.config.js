'use strict';

const webpackMerge = require('webpack-merge');
const base = require('./webpack/base');

module.exports = env => {
  let preferredConfig;

  switch (env) {
    case 'prod':
      preferredConfig = require('./webpack/production');
      break;

    case 'dev':
    default:
      preferredConfig = require('./webpack/development');
      break;
  }

  return webpackMerge(base, preferredConfig);
};

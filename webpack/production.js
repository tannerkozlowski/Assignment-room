'use strict';

const webpack = require('webpack');

module.exports = {
  entry: './app.js',

  plugins: [
    new webpack.optimize.UglifyJsPlugin(({
      comments: false,
      sourceMap: false,
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        drop_console: true,
        sequences: true,
        booleans: true
      }
    }))
  ]
};

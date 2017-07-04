'use strict';

const webpack      = require('webpack');
const { resolve }  = require('path');

module.exports = {
  entry: './src/app.js',

  devtool: '#cheap-inline-module-source-map',

  devServer: {
    // Enable HMR on the server
    hot: true,

    // Match the output path
    contentBase: resolve(process.cwd(), 'build/'),

    // Match the output `publicPath`
    publicPath: '/',

    host: 'localhost',
    port: 3000,

    historyApiFallback: true,

    stats: {
      colors: true,
      hash: false,
      version: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false
    }
  },

  plugins: [
    // Enable HMR globally
    new webpack.HotModuleReplacementPlugin(),

    // Prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin()
  ]
};

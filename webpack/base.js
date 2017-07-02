'use strict';

const webpack                   = require('webpack');
const HtmlWebpackPlugin         = require('html-webpack-plugin');
const { resolve }               = require('path');
const { BundleAnalyzerPlugin }  = require('webpack-bundle-analyzer');

const NODE_ENV = process.env.NODE_ENV;
const appPath  = process.cwd();

const config = {
  context: resolve(appPath),

  output: {
    path: resolve(appPath, 'build/'),
    publicPath: '/',
    filename: 'app.js'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'style':  resolve(appPath, 'src/style'),
      'assets': resolve(appPath, 'assets')
    }
  },

  resolveLoader: {
    moduleExtensions: ['*-loader', '*']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ],
        include: [
          resolve(appPath, 'src/')
        ]
      },

      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              paths: [
                resolve(appPath, 'src/')
              ]
            }
          }
        ]
      },

      {
        test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      }
    ]
  },

  plugins: [
    // No output on errors
    new webpack.NoEmitOnErrorsPlugin(),

    // Define an environment
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(NODE_ENV)
      }
    }),

    // Generate HTML files to serve the bundle
    new HtmlWebpackPlugin({
      template: resolve(appPath, 'src/index.html')
    })
  ]
};

// Run webpack bundle analyzer
if (process.env.ANALYZE) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;

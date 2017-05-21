'use strict';

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

// helpers for writing path names
// e.g. join("web/static") => "/full/disk/path/to/hello/web/static"
function join(dest) { return path.resolve(__dirname, dest); }
function web(dest) { return join('priv/static/' + dest); }
const isProd = process.env.NODE_ENV === 'production';

var config = module.exports = {
  devtool: isProd ? 'source-map' : 'eval',

  entry: {
    application: [
      'babel-polyfill',
      web('css/app.styl'),
      web('js/app.js'),
    ],
  },

  output: {
    path: join('priv/static'),
    filename: 'js/application.js',
  },

  resolve: {
    extensions: ['.jsx', '.js', '.styl'],
    modules: ['node_modules'],
  },

  module: {
    rules: [

        {
          test: /\.(js|jsx)$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [ [ 'es2015', { modules: false } ], 'react', 'es2017']
              }
            }
          ]
        },
        {
          test: /\.styl$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'stylus-loader'] })
        }
    ]
  },

  plugins: [
    new ExtractTextPlugin('css/application.css'),
  ],
};



// if (isProd) {
//  config.plugins.push(
//    new webpack.optimize.UglifyJsPlugin({
//      compress: {
//        warnings: false,
//        screw_ie8: true,
//        conditionals: true,
//        unused: true,
//        comparisons: true,
//        sequences: true,
//        dead_code: true,
//        evaluate: true,
//        if_return: true,
//        join_vars: true,
//      },
//      output: {
//        comments: false,
//      },
//    })
//  );
// };

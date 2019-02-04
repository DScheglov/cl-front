const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const __PROD__ = process.env.NODE_ENV === 'production';

module.exports = {
  mode: __PROD__ ? 'production' : 'development',
  entry: {
    cl: './build/cl.js',
  },

  externals: {
    'config': JSON.stringify(require('./config.json')),
  },

  output: {
    path: path.resolve(__dirname, './public'),
    chunkFilename: '[name].[chunkHash].js',
    filename: '[name].[chunkHash].js',
    publicPath: '/',
  },

  devtool: __PROD__ ? false : 'source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),

    new HtmlWebpackPlugin({
      template: './build/index.ejs',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ]
  },
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
  }
};
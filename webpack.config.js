const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const __PROD__ = process.env.NODE_ENV === 'production';

module.exports = {
  mode: __PROD__ ? 'production' : 'development',
  entry: {
    cl: './build/cl.js',
  },
  output: {
    path: path.resolve(__dirname, './public'),
    chunkFilename: '[name].[chunkHash].js',
    filename: '[name].[chunkHash].js',
    publicPath: '/',
  },

  devtool: __PROD__ ? false : 'source-map',

  plugins: [
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
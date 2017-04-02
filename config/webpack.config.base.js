const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {app: './src/bootstrap.jsx', vendor: './src/vendor.js'},
  output: {path: path.resolve(__dirname, '..', 'dist'), filename: '[name].[chunkhash].js'},
  devServer: {
    https: true
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['app', 'vendor']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {collapseWhitespace: true},
      inject: true
    })
  ]
};

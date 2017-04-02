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
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(eot|svg)$/,
        loader: 'file-loader?name=[name].[hash:20].[ext]'
      },
      {
        test: /\.(ttf|woff)$/,
        loader: 'url-loader?name=[name].[hash:20].[ext]&limit=10000'
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

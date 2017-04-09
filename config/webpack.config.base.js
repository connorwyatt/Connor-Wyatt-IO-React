const path = require('path'),
  webpack = require('webpack'),
  FaviconsWebpackPlugin = require('favicons-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/bootstrap.tsx',
    libs: [
      'core-js',
      'tslib',
      'react',
      'react-dom',
      'react-router',
      'react-router-dom',
      'rxjs',
      'firebase'
    ]
  },
  output: {path: path.resolve(__dirname, '..', 'dist'), filename: '[name].[chunkhash].js'},
  devServer: {
    https: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react']
            }
          },
          {
            loader: 'ts-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            options: {
              url: false,
              minimize: true,
              discardComments: {removeAll: true}
            }
          }, {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, '..', 'src', 'favicon.png'),
      prefix: '/assets/favicons/',
      persistentCache: true,
      inject: true,
      background: '#fff',
      title: 'Connor Wyatt IO',
      appName: 'Connor Wyatt IO',
      developerName: 'Connor Wyatt',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['app', 'libs']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {collapseWhitespace: true},
      inject: true
    }),
    new CopyWebpackPlugin([{
      from: 'src/assets',
      to: 'assets'
    }])
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  }
};

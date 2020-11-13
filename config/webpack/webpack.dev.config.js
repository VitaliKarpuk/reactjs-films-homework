/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.js']
  },
  output: {
    path: path.join(__dirname, '../../build'),
    publicPath: '/',
    filename: '[name].js'
  },
  mode: 'development',
  target: 'web',
  devtool: '#source-map',
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          emitWarning: true,
          failOnError: false,
          failOnWarning: false
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          }
        ]
      },
      {
        test: /\.(s[ca]ss)/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "./assets/images",
          }
        }]
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "./assets/fonts",
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      excludeChunks: ['server']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
}
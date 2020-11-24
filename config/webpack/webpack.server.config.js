/* eslint-disable no-undef */
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = (env, argv) => {
  const SERVER_PATH = './src/server/server-dev.js';

  return ({
    entry: {
      server: SERVER_PATH,
    },
    devServer: {
      historyApiFallback: true
    },
    output: {
      path: path.join(__dirname, '../../build'),
      publicPath: '/',
      filename: '[name].js'
    },
    mode: argv.mode,
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
  })
}
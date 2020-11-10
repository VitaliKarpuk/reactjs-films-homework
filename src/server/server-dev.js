/* eslint-disable no-console */
/* eslint-disable no-undef */
import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../config/webpack/webpack.dev.config';

const app = express();
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const compiler = webpack(config);

if (config.mode === 'development') {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }))

  app.use(webpackHotMiddleware(compiler))

  app.get('*', (req, res, next) => {
    compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
      if (err) {
        return next(err)
      }
      res.set('content-type', 'text/html')
      res.send(result)
      res.end()
    })
  })
} else {
  app.use(express.static(DIST_DIR))
  app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
  })
}

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(config.mode);
  console.log(`App listening to ${PORT}....`)
  console.log('Press Ctrl+C to quit.')
})
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
const HTML_FILE = path.join(DIST_DIR, 'build');
const compiler = webpack(config);

if (config.mode === 'development') {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }))

  app.use(webpackHotMiddleware(compiler))

  app.use(express.static(HTML_FILE));

  app.get('/*', function(req, res) {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  });

  app.get('/top_rated', (req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  })

  app.get('/upcoming', (req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  })

  app.get('/genre/:id', (req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  })

} else {
    app.use(express.static(HTML_FILE));


  app.get('/*', (req, res) => {
    res.sendFile(HTML_FILE)
  })
  app.get('/top_rated', (req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  })

  app.get('/upcoming', (req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  })

  app.get('/genre/:id', (req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  })
}


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`)
  console.log('Press Ctrl+C to quit.')
})
/* eslint no-console:0 */
require('babel-register');

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router-dom');
const _ = require('lodash');
const fs = require('fs');
const App = require('./js/App').default;

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const config = require('./webpack.config');

const StaticRouter = ReactRouter.StaticRouter;
const baseTemplate = fs.readFileSync('./index.html');
const template = _.template(baseTemplate);

const PORT = 8080;

const server = express();

const compiler = webpack(config);

server.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

server.use(webpackHotMiddleware(compiler));

server.use('/public', express.static('./public'));

server.use((req, res) => {
  const context = {};
  const body = ReactDOMServer.renderToString(
    React.createElement(StaticRouter, { location: req.url, context }, React.createElement(App))
  );

  if (context.url) {
    res.redirect(context.url);
  }

  res.write(template({ body }));
  res.end();
});

console.log(`Server-side rendering server is listening on port ${PORT}`);
server.listen(PORT);

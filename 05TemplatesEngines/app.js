'use strict'

var express = require('express'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    routes = require('./routes/index'),
    faviconURL = `${__dirname}/public/img/node-favicon.png`,
    publicDir = express.static(`${__dirname}/public`),
    viewDir = `${__dirname}/views`,
    port = normalizePort(process.env.PORT || '3000'),
    app = express()

app
  // configurando app
  .set('views', viewDir)
  .set('view engine', 'jade')
  .set('port', port)
  // ejecutando middleware
  .use(favicon(faviconURL))
  .use(morgan('dev'))
  .use(publicDir)
  // ejecuto el middleware enrutador
  .use('/', routes)

  /**
   * Normalize a port into a number, string, or false.
   */

  function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
      // named pipe
      return val;
    }

    if (port >= 0) {
      // port number
      return port;
    }

    return false;
  }

module.exports = app

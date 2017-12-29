'use strict'

var express = require('express'),
    favicon = require('serve-favicon'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    restFul = require('express-method-override')('_method')
    routes = require('./routes/movie-router'),
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
  // parse application/json
  .use(bodyParser.json())
  // parse application/x-www-form-urlencoded
  .use(bodyParser.urlencoded({extended: false}))
  .use(restFul)
  .use(morgan('dev'))
  .use(publicDir)
  // ejecuto el middleware enrutador
  .use(routes)

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

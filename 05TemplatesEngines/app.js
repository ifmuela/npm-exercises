'use strict'

var express = require('express'),
    favicon = require('serve-favicon'),
    jade = require('jade'),
    routes = require('./routes/index'),
    faviconURL = `${__dirname}/public/img/node-favicon.png`,
    publicDir = express.static(`${__dirname}/public`),
    viewDir = express.static(`${__dirname}/views`),
    port = (process.env.PORT || 3000),
    app = express()

app
  // configurando app
  .set('views', viewDir)
  .set('views engine', jade)
  .set('port', port)
  // ejecutando middleware
  .use(favicon(faviconURL))
  .use(publicDir)
  // ejecuto el middleware enrutador
  .use('/', routes)

module.exports = app

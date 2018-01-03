'use strict'

var mysql = require('mysql'),
    config = require('./db-config'),
    dbOptions = {
      host: config.mysql.host,
      port: config.mysql.port,
      user: config.mysql.user,
      password: config.mysql.pass,
      database: config.mysql.db
    },
    myConn = mysql.createConnection(dbOptions)

myConn.connect((err) => {
  return (err) ? console.log(`Error al conectarse a MySQL: ${err.stack}`) : console.log(`Conexión
    establecida con MySQL N: ${myConn.threadId}`)
})
module.exports = myConn

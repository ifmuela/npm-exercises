'use strict'

var express = require('express'),
	app = express(),
  cookieParser = require('cookie-parser'),
  cookieSession = require('cookie-session')

app
  .use(cookieParser())
  .use(cookieSession({secret: "secreto"}))

app
	.get('/', (req, res) => {
    req.session.visitas || (req.session.visitas = 0)

    let n = req.session.visitas++

		res.end(`
        <h1>Bienvenido a express</h1>
        <b>Cantidad de visitas: </b> ${n}
      `)
	})

var server = app.listen(3000, () => {
	var host = server.address().address,
		port = server.address().port

	console.log('Express corriendo en http://%s:%s', host, port)
})

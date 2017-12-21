'use strict'

var express = require('express'),
	app = express()

app
	.get('/', (req, res) => {
		res.sendFile(`${__dirname}/assets/index.html`)
	})

var server = app.listen(3000, () => {
	var host = server.address().address,
		port = server.address().port

	console.log('Express corriendo en http://%s:%s', host, port)
})

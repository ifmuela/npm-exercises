'use strict'

var express = require('express'),
	app = express()

app
	.get('/', (req, res) => {
		res.send('<h1>Bienvenido a express</h1>')
	})

	.get('/kami', (req, res) => {
		res.redirect(301, 'inecsoft.co.uk')
	})

	.get('/json', (req, res) => {
		res.json({
			name : "Ian",
			age : 31,
			twitter : "@ianmuela"
		})
	})

	.get('/render', (req, res) => {
		res.render(`${__dirname} + /assets/index`)
	})

var server = app.listen(3000, () => {
	var host = server.address().address,
		port = server.address().port

	console.log('Express corriendo en http://%s:%s', host, port)
})

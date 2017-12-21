'use strict'

var express = require('express'),
	app = express()

app
	.get('/', (req, res) => {
		res.end('Bienvenido a express :)')
	})
	.get('/user/:id', (req, res) => {
		res.end(`
			<h1>Bienvenido a express :)</h1>
			<b>${req.params.id}</b>
		`)
	})
	.get('/user/:id-:name-:age', (req, res) => {
		res.end(`
			<b>${req.params.name}</b>
			<h1>Bienvenido a express :)</h1>
			<b>ID: ${req.params.id}</b>
			<b>Age: ${req.params.age}</b>
		`)
	})
	.get('/search', (req, res) => {
		res.end(`
			<h1>Bienvenido a express los resultados de la busqueda son</h1>
			<mark>${req.query.s}</mark>
		`)
	})

var server = app.listen(3000, () => {
	var host = server.address().address,
		port = server.address().port

	console.log('Express corriendo en http://%s:%s', host, port)
})

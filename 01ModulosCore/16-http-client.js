'use strict'

var http = require('http'),
	options = {
		host: 'inecsotf.co.uk',
		port: 3000,
		path: '/'
	}
	
http
	.get(options, (res) => {
		console.log(`El sitio ${options.host} ha respondido. Codigo de Estado: ${res.statusCode}`)
	})
	.on('error', (err) => {
		console.log(`El sitio ${options.host} no respondio. Codigo de Estado: ${err.code}. Error: ${err.message}`)
	})

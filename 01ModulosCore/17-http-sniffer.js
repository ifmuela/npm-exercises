'use strict'

var http = require('http'),
	options = {
		host: 'bextlan.com',
		port: 80,
		path: '/'
	},
	htmlCode = ''

function webServer(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'})
	res.end(htmlCode)

}

// instaancia cliente de http	
http
	.get(options, (res) => {
		console.log(`El sitio ${options.host} ha respondido. Codigo de Estado: ${res.statusCode}`)
		res.on('data', (data) => {
			htmlCode += data
			console.log(data, data.toString())
		})
	})
	.on('error', (err) => {
		console.log(`El sitio ${options.host} no respondio. Codigo de Estado: ${err.code}. Error: ${err.message}`)
	})
// instancias servidor http
http
	.createServer(webServer)
	.listen(3000)

console.log('Server running at http://localhost:3000/')

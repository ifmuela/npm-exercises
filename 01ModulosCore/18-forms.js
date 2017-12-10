'use strict'

var http = require('http').createServer(webServer),
	form = require('fs').readFileSync('assets/form.html'),
	querystring = require('querystring'),
	util = require('util'),
	dataString = ''

function webServer(req, res) {
	if(req.method == 'GET'){
		res.writeHead(200, {'Content-Type': 'text/html'})
		res.end(form)
	}

	if(req.method == 'POST'){
		req
			.on('data', (data) => {
				dataString += data
			})
			.on('end', () => {
				var dataObject = querystring.parse(dataString),
					dataJSON = util.inspect(dataObject),
					templateString = `
					Los datos enviados por POST como String son: ${dataString}
					Los datos enviados por POST como Object son: 
					Los datos enviados por POST como JSON son: ${dataJSON}
				`
				console.log(templateString)
				res.end(templateString)
			})
	}
}

// instancias servidor http
http
	.listen(3000)

console.log('Server running at http://localhost:3000/')
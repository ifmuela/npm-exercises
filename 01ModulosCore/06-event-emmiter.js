'use strict'

var EventEmitter = require('events').EventEmitter,
	pub = new EventEmitter()

pub
	.on('myevent', function (message) {
		console.log(message)
	})
	.once('myevent', function (message) {
		console.log('Se emite la primera vez: ' + message)
	})
	.emit('myevent', 'Soy un emisor de eventos')
	pub.emit('myevent', 'Volvindo a emitir')
	pub.removeAllListeners('myevent')
	pub.emit('myevent', 'Emitiend por tercera vez')
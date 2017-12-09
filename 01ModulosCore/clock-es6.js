'use strict'

var Clock = (function () {
	var EventEmitter = require('events').EventEmitter,
		inherits = require('util').inherits

	// let Clock = () => {setInterval((this) => this.emit('tictac'), 1000)}

	//	constructor
	let Clock = function () {
		// var self = this

		setInterval(() => {this.emit('tictac')}, 1000)

		// setInterval(function () {
		// 	self.emit('tictac')
		// }, 1000)
	}

	inherits(Clock, EventEmitter)

	Clock.prototype.thetime = function () {
		var date = new Date(),
			hrs = addZero((date.getHours() > 12) ? date.getHours() - 12 : date.getHours()),
			min = addZero(date.getMinutes()),
			sec = addZero(date.getSeconds()),
			ampm = (date.getHours() < 12) ? 'am' : 'pm',
			// msg = hrs + ':' + min + ':' + sec + ' ' + ampm
			msg = `${hrs}:${min}:${sec}: ${ampm} en es6`

		function addZero(num) {
			return (num < 10) ? ('0' + num) : num
		}	

		console.log(msg)
	}

	return Clock
})()

module.exports = Clock
'use strict'

class Clock {
	//	constructor
	constructor(){
		setInterval(() => {this.thetime()}, 1000)
	}

	thetime () {
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
}

module.exports = Clock
'use strict'

var net = require('net')
var zeroFill = function(number) {
	if(number < 10) {
		return '0' + number
	}

	return number
}
var time = function () {
	var now = new Date()
	var time = now.getFullYear() + '-' + zeroFill(now.getMonth() + 1) + '-' + zeroFill(now.getDate()) + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes())
	return time;
}
var server = net.createServer(function (socket) {
	socket.write(time() + '\n')
	socket.end()
})

server.listen(process.argv[2])

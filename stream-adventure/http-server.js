'use strict'

var http = require('http')
var uppercase = new require('stream').Transform()

uppercase._transform = function (chunk, encoding, done) {
	done(null, chunk.toString().toUpperCase())
}


var server = http.createServer(function (request, response) {
	request.pipe(uppercase).pipe(response)
})

server.listen(process.argv[2])
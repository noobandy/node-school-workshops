'use strict'

var http = require('http')
var uppercaseTransformer = new require('stream').Transform()

uppercaseTransformer._transform = function (chunk, encoding, done) {
	done(null, chunk.toString().toUpperCase())
}

var server = http.createServer(function (request, response) {
	if(request.method === 'POST') {
		request.pipe(uppercaseTransformer).pipe(response)
	} else {
		response.statusCode = 405
		response.end()
	}
})

server.listen(process.argv[2])
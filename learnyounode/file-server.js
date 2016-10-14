'use strict'

var http = require('http')
var fs = require('fs')

var server = http.createServer(function (request, response) {
	var dataStream = fs.createReadStream(process.argv[3]);

	dataStream.pipe(response)

	dataStream.on('end', function() {
		response.end()
	})
})


server.listen(process.argv[2])
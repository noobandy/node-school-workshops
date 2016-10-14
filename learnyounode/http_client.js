'use strict'

var http = require('http')

var request = http.request(process.argv[2], function (response) {
	response.setEncoding('utf8')
	response.on('data', function (chunk) {
		console.log(chunk.toString())
	})

	response.on('error', function (err) {
		console.log(err)
	})

	response.on('end', function () {

	})
})

request.end()
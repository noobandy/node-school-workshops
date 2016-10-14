'use strict'

var http = require('http')

var request = http.request(process.argv[2], function (response) {
	response.setEncoding('utf8')
	var str = ''
	response.on('data', function (chunk) {
		str += chunk.toString()
	})

	response.on('error', function (err) {
		console.log(err)
	})

	response.on('end', function () {
		console.log(str.length)
		console.log(str)
	})
})

request.end()
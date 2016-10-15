'use strict'

var http = require('http')

var request = http.request({host:'localhost', port: 8099, path: '/', method: 'POST'})
process.stdin.pipe(request)

request.on('response', function (response) {
	response.pipe(process.stdout)
})

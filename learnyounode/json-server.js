'use strict'

var http = require('http')
var url = require('url')

var server = http.createServer(function (request, response) {
	var parsedUrl = url.parse(request.url, true)
	var date = new Date(parsedUrl.query.iso)

	switch(parsedUrl.pathname) {
		case '/api/parsetime':
			response.write(JSON.stringify({
				hour: date.getHours(),
				minute: date.getMinutes(),
				second: date.getSeconds()
			}))
		break
		case '/api/unixtime':
			response.write(JSON.stringify({
				unixtime: date.getTime()
			}))
		break
	}

	response.end()
})


server.listen(process.argv[2])
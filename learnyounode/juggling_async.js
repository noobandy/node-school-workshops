'use strict'

var http = require('http')

var results = {}

var printResults = function () {
	for(var i = 2; i < process.argv.length; i++) {
		console.log(results[process.argv[i]].response)
	}
}

var get = function (url) {
	results[url] =  {response: '', complete: false}

	var request = http.get(url, function (response) {
		response.setEncoding('utf8')

		response.on('data', function (chunk) {
			results[url].response += chunk.toString() 
		})

		response.on('error', function (error) {
			console.log('error : '+url)
		})

		response.on('end', function () {
			results[url].complete = true
			var allDone = true

			for(var prop in results) {
				if(!results[prop].complete) {
					allDone = false
				}
			}

			if(allDone) {
				printResults()
			}
		})
	})

	
	request.end()
}

for(var i = 2; i < process.argv.length; i++) {
	get(process.argv[i])
}



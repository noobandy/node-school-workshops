'use strict'

var path = require('path')
var fls = require(path.join(__dirname, 'filtered_ls'))

fls(process.argv[2], process.argv[3], function (err, files) {
	if(err) {
		console.log(err)
	} else {
		files.forEach(function(file) {
			console.log(file)
		})
	}
})

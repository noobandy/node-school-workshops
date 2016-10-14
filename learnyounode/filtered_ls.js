'use strict'

var fs = require('fs')

var dirPath = process.argv[2]
var filterExtension = '.'+process.argv[3]

fs.readdir(dirPath, function (err, files) {
	if(!err) {
		for(var i = 0; i < files.length; i++) {
			if(files[i].substring(files[i].lastIndexOf('.'), files[i].length) === filterExtension) {
				console.log(files[i])
			}
		}
	}
})

'use strict'

var fs = require('fs')
var path = require('path')

var filtered_ls = function (dirName, extension, cb) {
	fs.readdir(dirName, function (err, files) {
		if(err) {
			return cb(err)
		}

		var filterExtension = '.' + extension
		var filteredFiles = files.filter(function (file) {
			return path.extname(file) === filterExtension
		})

		return cb(null, filteredFiles)
	})
}

module.exports = filtered_ls

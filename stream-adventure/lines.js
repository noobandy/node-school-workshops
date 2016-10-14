'use strict'

var split = new require('stream').Transform()

split._transform = function (chunk, encoding, done) {
	this.push(chunk)
	done(null)
}
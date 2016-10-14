'use strict'

var fs = require('fs')

var Transformer = new require('stream').Transform()

Transformer._transform = function (chunk, encoding, done) {
	done(null, chunk.toString().toUpperCase())
}

process.stdin.pipe(Transformer).pipe(process.stdout)
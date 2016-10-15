'use strict'

var concat = new require('stream').Transform()

concat._transform = function (chunk, encoding, done) {
	if(!this._data) {
		this._data = ''
	}

	this._data += chunk.toString()

	done()
}

concat._flush = function (done) {
	if(this._data) {
		var i = 0, j = this._data.length - 1, chars = []
		while(i < j) {
			chars[i] = this._data[j]
			chars[j] = this._data[i]
			i++
			j--
		}

		this.push(chars.join(''))
	}
	done()
}

process.stdin.pipe(concat).pipe(process.stdout)
'use strict'

var split = new require('stream').Transform({objectMode: true})

split._transform = function (chunk, encoding, done) {
	var data = chunk.toString()

	if(!this._lineNumber) {
		this._lineNumber = 1
	}

	if(this._lastLineData) {
		data = this._lastLineData + data
	}

	var lines = data.split('\n')
	this._lastLineData = lines.splice(lines.length -1, 1)[0]
	var that = this
	lines.forEach(function (line) {
		
		if(that._lineNumber % 2 === 0) {
					that.push(line.toUpperCase()+'\n')
		} else {
			that.push(line.toLowerCase()+'\n')
		}

		that._lineNumber++;
	})

	done()
}

split._flush = function (done) {
	if(this._lastLineData) {
		if(this._lineNumber % 2 === 0) {
					this.push(this._lastLineData.toUpperCase()+'\n')
		} else {
			this.push(this._lastLineData.toLowerCase()+'\n')
		}
	}

	done()
}

process.stdin.pipe(split).pipe(process.stdout)





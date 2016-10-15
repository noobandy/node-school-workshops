'use strict'

var io = require('socket.io')()
io.on('connection', function (socket) {
	socket.write('hello\n')
})

io.listen(8099)
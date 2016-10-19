'use strict'
const makeCounter = function (obj) {
	var i = 0;
	obj.next = function () {
		return {value: ++i, done: i > 10}
	}
}

module.exports = makeCounter
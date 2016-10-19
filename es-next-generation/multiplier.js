'use strict'

module.exports = function *multiplier () {
	var num = 1
	var factor = 1
	while(true) {
		factor = yield (num * factor)
		factor = factor ? factor : 1
		num++
	}
}
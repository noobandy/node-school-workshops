'use strict'

module.exports = function *generator (even) {
	var num = even ? 0 : -1

	while(true) {
		num += 2
		yield num
	}
}
'use strict'

/*var generator = function (first) {
	var even = first
	var last;

	return {
		next: function (swap) {
			if(swap) {
				even = !even
			}

			if(even) {
				if(last) {
					if(last % 2 == 0) {
						last = last + 2
					} else {
						last = last + 1
					}
				} else {
					last = 2
				}
			} else {
				if(last) {
					if(last % 2 == 0) {
						last = last + 1
					} else {
						last = last + 2
					}
				} else {
					last = 1
				}
			}
			return {value: last, done: false}
		}
	}
}*/

var generator = function (first) {
	var even = first
	var last = even ? 0 : -1;

	return {
		next: function (swap) {
			last += swap ? 1 : 2 
			return {value: last, done: false}
		}
	}
}


module.exports = generator
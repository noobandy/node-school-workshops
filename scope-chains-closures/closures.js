'use strict'

function foo () {
	var bar
	quux = 'some value'
	function zip () {
		var quux = 'some other value'
		bar = true
	}

	return zip
}

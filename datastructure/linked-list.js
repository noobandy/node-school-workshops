'use strict'
const linkedList = function () {
	var items = []
	
	var checkIndex = function(index) {
		if(index < 0 || index > items.length) {
			throw new Error({name: 'IndexError', index: index})
		}
	}

	return {
		get: function (index) {
			checkIndex(index)

			return items[index]
		},
		add: function (item) {
			items.push(item)
		},
		addAtIndex: function (index, item) {
			checkIndex(index)

			//add item at the specified index
			items.splice(index, 0, item)
		},
		contains: function (item, criterionFunction) {
			if(typeof criterionFunction === 'function') {
				return items.some(criterionFunction);
			} else {
				return items.some( function valueMatch (value) {
					return value == item
				})
			}
		},
		size: function () {
			return items.length
		},
		isEmpty: function () {
			return this.size() == 0
		},
		remove: function (index) {
			checkIndex(index)

			items.splice(index, 1)
		}
	}
}


module.exports = linkedList
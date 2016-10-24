'use strict'
const stack = function(capacity) {
	let arr = []

	return {
		push: function (item) {
			if(this.isFull()) {
				throw new Error("StackFullException")
			}

			arr.push(item)
		},
		peek: function () {
			if(this.isEmpty()) {
				throw new Error("StackEmptyException")
			}
			return arr[arr.length - 1]
		},
		pop: function () {
			if(this.isEmpty()) {
				throw new Error("StackEmptyException")
			}
			return arr.pop()
		},
		capacity: function () {
			return capacity
		},
		isEmpty: function () {
			return arr.length == 0
		},
		isFull: function () {
			if(capacity) {
				return capacity <= arr.length
			}
			return false
		}

	}
}

module.exports = stack
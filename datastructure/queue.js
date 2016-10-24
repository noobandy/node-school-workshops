'use strict'
const queue = function(capacity) {
	let arr = []

	return {
		enqueue: function (item) {
			if(this.isFull()) {
				throw new Error("QueueFullException")
			}

			arr.unshift(item)
		},
		peek: function () {
			if(this.isEmpty()) {
				throw new Error("QueueEmptyException")
			}
			return arr[arr.length - 1]
		},
		dequeue: function () {
			if(this.isEmpty()) {
				throw new Error("QueueEmptyException")
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

module.exports = queue
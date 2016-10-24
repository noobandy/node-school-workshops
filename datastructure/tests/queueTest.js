'use strict'

const path = require('path')
const assert = require('chai').assert
const queue = require(path.join(__dirname, '../queue'))

describe('queue', function () {

	describe('#isEmpty', function () {
		it('should return true for newly created queue', function () {
			var myQueue = queue(10)
			assert.isTrue(myQueue.isEmpty())
		})

		it('should return false if there is any item in queue', function () {
			var myQueue = queue(10)
			myQueue.enqueue(1)
			assert.isFalse(myQueue.isEmpty())
		})

		it('should return true if there is no item in queue', function () {
			var myQueue = queue(10)
			myQueue.enqueue(1)
			myQueue.dequeue()
			assert.isTrue(myQueue.isEmpty())
		})
	})

	describe('#isFull', function () {
		it('should return false for newly created queue', function () {
			var myQueue = queue()
			assert.isFalse(myQueue.isFull())
		})

		it('should return true if queue is full', function () {
			var myQueue = queue(2)
			myQueue.enqueue(1)
			myQueue.enqueue(2)
			assert.isTrue(myQueue.isFull())
		})

		it('should return false if queue is not full', function () {
			var myQueue = queue(2)
			myQueue.enqueue(1)
			myQueue.enqueue(2)
			myQueue.dequeue()
			assert.isFalse(myQueue.isFull())
		})
	})

	describe('#capacity', function () {
		it('should return the capacity of the queue', function () {
			var myQueue = queue(10)

			assert.equal(10, myQueue.capacity())
		})
	})

	describe('#enqueue', function () {
		it('should throw error if queue is full', function () {
			var myQueue = queue(1)
			myQueue.enqueue(1)
			assert.throws(function () {
				myQueue.enqueue(2)
			})
		})

		it('should enqueue the item', function () {
			var myQueue = queue()
			myQueue.enqueue(1)
			assert.equal(1, myQueue.peek())
		})
	})

	describe('#peek', function () {
		it('should throw error if queue is empty', function () {
			var myQueue = queue()
			assert.throws(function () {
				myQueue.peek()
			})
		})

		it('should return the item at front of the queue', function () {
			var myQueue = queue()
			myQueue.enqueue(1)
			assert.equal(1, myQueue.peek())
			//peek again
			assert.equal(1, myQueue.peek())
		})
	})

	describe('#dequeue', function () {
		it('should throw error if queue is empty', function () {
			var myQueue = queue()
			assert.throws(function () {
				myQueue.dequeue()
			})
		})

		it('should remove and return the item from front of the queue', function () {
			var myQueue = queue()
			myQueue.enqueue(1)
			myQueue.enqueue(2)
			
			assert.equal(1, myQueue.dequeue())
			//dequeue again
			assert.equal(2, myQueue.dequeue())
		})
	})
})
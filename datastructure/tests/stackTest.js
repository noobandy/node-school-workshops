'use strict'

const path = require('path')
const assert = require('chai').assert
const stack = require(path.join(__dirname, '../stack'))

describe('stack', function () {

	describe('#isEmpty', function () {
		it('should return true for newly created stack', function () {
			var myStack = stack(10)
			assert.isTrue(myStack.isEmpty())
		})

		it('should return false if there is any item in stack', function () {
			var myStack = stack(10)
			myStack.push(1)
			assert.isFalse(myStack.isEmpty())
		})

		it('should return true if there is no item in stack', function () {
			var myStack = stack(10)
			myStack.push(1)
			myStack.pop()
			assert.isTrue(myStack.isEmpty())
		})
	})

	describe('#isFull', function () {
		it('should return false for newly created stack', function () {
			var myStack = stack()
			assert.isFalse(myStack.isFull())
		})

		it('should return true if stack is full', function () {
			var myStack = stack(2)
			myStack.push(1)
			myStack.push(2)
			assert.isTrue(myStack.isFull())
		})

		it('should return false if stack is not full', function () {
			var myStack = stack(2)
			myStack.push(1)
			myStack.push(2)
			myStack.pop()
			assert.isFalse(myStack.isFull())
		})
	})

	describe('#capacity', function () {
		it('should return the capacity of the stack', function () {
			var myStack = stack(10)

			assert.equal(10, myStack.capacity())
		})
	})

	describe('#push', function () {
		it('should throw error if stack is full', function () {
			var myStack = stack(1)
			myStack.push(1)
			assert.throws(function () {
				myStack.push(2)
			})
		})

		it('should push the item on top of the stack', function () {
			var myStack = stack()
			myStack.push(1)
			assert.equal(1, myStack.peek())
		})
	})

	describe('#peek', function () {
		it('should throw error if stack is empty', function () {
			var myStack = stack()
			assert.throws(function () {
				myStack.peek()
			})
		})

		it('should return the item at top of the stack', function () {
			var myStack = stack()
			myStack.push(1)
			assert.equal(1, myStack.peek())
			//peek again
			assert.equal(1, myStack.peek())
		})
	})

	describe('#pop', function () {
		it('should throw error if stack is empty', function () {
			var myStack = stack()
			assert.throws(function () {
				myStack.pop()
			})
		})

		it('should return the item at top of the stack', function () {
			var myStack = stack()
			myStack.push(1)
			myStack.push(2)
			
			assert.equal(2, myStack.pop())
			//peek again
			assert.equal(1, myStack.pop())
		})
	})
})
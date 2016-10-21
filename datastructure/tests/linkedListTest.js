'use strict'

const path = require('path')
const assert = require('chai').assert

var linkedList = require(path.join(__dirname, '../linked-list'))

describe('linkedList', function () {
	describe('#isEmpty', function () {
		const myLinkedList = linkedList()
		it('should return true for newly created linked list', function () {
			assert.isTrue(myLinkedList.isEmpty())
		})

		it('should return false if there is any item in linked list', function () {
			myLinkedList.add(1)

			assert.isFalse(myLinkedList.isEmpty())
		})

		it('should return true if there is no item in linked list', function () {
			myLinkedList.remove(1)

			assert.isTrue(myLinkedList.isEmpty())
		})
	})

	describe('#add', function () {
		const myLinkedList = linkedList()
		it('should add item to linked list', function () {
			myLinkedList.add(1)

			assert.isFalse(myLinkedList.isEmpty())
		})
	})

	describe('#addAfter', function () {
		const myLinkedList = linkedList()
		
	})

	describe('#contains', function () {
		const myLinkedList = linkedList()
		it('should return true when item is present in linked list', function () {
			myLinkedList.add(1)

			assert.isTrue(myLinkedList.contains(1))

			assert.isTrue(myLinkedList.contains(1, function(value) {
				return value == 1
			}))
		})

		it('should return false when item is not present in linked list', function () {

			assert.isFalse(myLinkedList.contains(2))

			assert.isFalse(myLinkedList.contains(2, function(value) {
				return value == 2
			}))
		})
	})

	describe('#size', function () {
		const myLinkedList = linkedList()
		it('should return 0 for newly created linked list', function () {
			assert.equal(myLinkedList.size(), 0)
		})

		it('should return no. of items present in linked list', function () {
			myLinkedList.add(1);
			myLinkedList.add(1);
			myLinkedList.add(1);
			assert.equal(myLinkedList.size(), 3)
		})
	})

	describe('#remove', function () {
		const myLinkedList = linkedList()
		it('should remove item from linked list', function () {
			myLinkedList.add(1)
			myLinkedList.remove(1)

			assert.isTrue(myLinkedList.isEmpty())
		})
	})
})

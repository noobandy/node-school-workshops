'use strict'

const path = require('path')
const assert = require('chai').assert

var list = require(path.join(__dirname, '../list'))

describe('list', function () {
	describe('#isEmpty', function () {
		const myList = list()
		it('should return true for newly created list', function () {
			assert.isTrue(myList.isEmpty())
		})

		it('should return false if there is any item in list', function () {
			myList.add(1)

			assert.isFalse(myList.isEmpty())
		})

		it('should return true if there is no item in list', function () {
			myList.remove(0)

			assert.isTrue(myList.isEmpty())
		})
	})

	describe('#add', function () {
		const myList = list()
		it('should add item to list', function () {
			myList.add(1)

			assert.equal(myList.get(0), 1)
		})
	})

	describe('#addAtIndex', function () {
		const myList = list()
		it('should throw error for index lesser than 0', function () {
			assert.throws(function () {
				myList.addAtIndex(-1, 1)
			})
		})
		it('should throw error for index greater than size of list', function () {
			assert.throws(function () {
				myList.addAtIndex(myList.size() + 1, 1)
			})
		})
		it('should throw add item at given index of list', function () {
			myList.add(0)
			myList.add(1)
			myList.add(4)

			myList.addAtIndex(2, 3)

			assert.equal(myList.get(2), 3)	
		})
	})

	describe('#contains', function () {
		const myList = list()
		it('should return true when item is present in list', function () {
			myList.add(1)

			assert.isTrue(myList.contains(1))

			assert.isTrue(myList.contains(1, function(value) {
				return value == 1
			}))
		})

		it('should return false when item is not present in list', function () {

			assert.isFalse(myList.contains(2))

			assert.isFalse(myList.contains(2, function(value) {
				return value == 2
			}))
		})
	})

	describe('#size', function () {
		const myList = list()
		it('should return 0 for newly created list', function () {
			assert.equal(myList.size(), 0)
		})

		it('should return no. of items present in list', function () {
			myList.add(1);
			myList.add(1);
			myList.add(1);
			assert.equal(myList.size(), 3)
		})
	})

	describe('#remove', function () {
		const myList = list()
		it('should remove item from list', function () {
			myList.add(1)
			myList.remove(0)

			assert.isTrue(myList.isEmpty())
		})
	})
})

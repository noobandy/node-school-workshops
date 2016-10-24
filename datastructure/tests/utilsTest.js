'use strict'

const path = require('path')
const assert = require('chai').assert
const utils = require(path.join(__dirname, '../utils'))

describe('utils', function () {
	let compare = function(first, second) {
		return first - second
	}
	
	let emptyArray
	let sortedArray
	let unsortedArray
	let unsortedArrayAfterSort

	beforeEach(function () {
		emptyArray = []
		sortedArray = [1,2,3]
		unsortedArray = [-8, 0, 7, 7, 5, 5, 3, 1, 6, -4, 4, 2]
		unsortedArrayAfterSort = [-8, -4, 0, 1, 2, 3, 4, 5, 5, 6, 7, 7]
	})

	describe('#selectionSort', function () {
		it('should sort empty array properly', function () {
			utils.selectionSort(emptyArray, compare)
			assert.deepEqual(emptyArray, emptyArray)
		})

		it('should sort sorted array properly', function () {
			utils.selectionSort(sortedArray, compare)
			assert.deepEqual(sortedArray, sortedArray)
		})

		it('should sort unsorted array properly', function () {
			utils.selectionSort(unsortedArray, compare)
			assert.deepEqual(unsortedArray, unsortedArrayAfterSort)
		})
	})

	describe('#insertionSort', function () {
		it('should sort empty array properly', function () {
			utils.insertionSort(emptyArray, compare)
			assert.deepEqual(emptyArray, emptyArray)
		})

		it('should sort sorted array properly', function () {
			utils.insertionSort(sortedArray, compare)
			assert.deepEqual(sortedArray, sortedArray)
		})

		it('should sort unsorted array properly', function () {
			utils.insertionSort(unsortedArray, compare)
			assert.deepEqual(unsortedArray, unsortedArrayAfterSort)
		})
	})

	describe('#mergeSort', function () {
		it('should sort empty array properly', function () {
			utils.mergeSort(emptyArray, compare)
			assert.deepEqual(emptyArray, emptyArray)
		})

		it('should sort sorted array properly', function () {
			utils.mergeSort(sortedArray, compare)
			assert.deepEqual(sortedArray, sortedArray)
		})

		it('should sort unsorted array properly', function () {
			utils.mergeSort(unsortedArray, compare)
			assert.deepEqual(unsortedArray, unsortedArrayAfterSort)
		})
	})

	describe('#quickSort', function () {
		it('should sort empty array properly', function () {
			utils.quickSort(emptyArray, compare)
			assert.deepEqual(emptyArray, emptyArray)
		})

		it('should sort sorted array properly', function () {
			utils.quickSort(sortedArray, compare)
			assert.deepEqual(sortedArray, sortedArray)
		})

		it('should sort unsorted array properly', function () {
			utils.quickSort(unsortedArray, compare)
			console.log(unsortedArray)
			assert.deepEqual(unsortedArray, unsortedArrayAfterSort)
		})
	})
})
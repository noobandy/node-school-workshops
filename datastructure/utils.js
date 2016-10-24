'use strict'

const selectionSort = function (arr, compare) {
	for(let i = 0; i < arr.length - 1; i++) {
		let minIdx = i
		let min = arr[i]

		for(let j = i; j < arr.length; j++) {
			if(compare(arr[j], min) < 0) {
				minIdx = j
				min = arr[minIdx]
			} 
		}

		//swap min with the ith value
		let temp = arr[i]
		arr[i] = arr[minIdx]
		arr[minIdx] = temp
	}
}

const insertionSort = function (arr, compare) {
	for(let i = 1; i < arr.length; i++) {
		let key = arr[i]
		let j = i - 1
		
		while(j >= 0 && compare(key, arr[j]) < 0) {
			arr[j + 1] = arr[j]
			j--
		}
		
		arr[j + 1] = key
		
	}
}

const mergeSort = function (arr, compare) {

}

const quickSort = function(arr, compare) {

}

module.exports.selectionSort = selectionSort
module.exports.insertionSort = insertionSort
module.exports.mergeSort = mergeSort
module.exports.quickSort = quickSort

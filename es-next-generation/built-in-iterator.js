const filterNumbers = function (it) {
	var nums = [];

	for(var value of it) {
		if(typeof value === 'number') {
			nums.push(value)
		}
	}

	return nums
}

module.exports = filterNumbers

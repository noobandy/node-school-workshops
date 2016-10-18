var ajax = function (url) {
	return new Promise(function (resolve, reject) {
		setTimeout(function doesAjaxThing () {
			resolve(url)
		}, 1000)
	})
}


var displayRemoteData = function* () {
	var data = yield ajax('url1')
	console.log(data)
}

//it's a generator
//displayRemoteData()

var main = function () {
	var it = displayRemoteData()
	//start generator
	var ajaxPromise = it.next().value

	ajaxPromise.then(function resolved (result) {
		//pass resolved data back in
		it.next(result)
	}).catch(function rejected (err) {
		console.log(err)
	})
	
}

main()
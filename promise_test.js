var downloadFile = function (url) {
	return new Promise (function (resolve, reject) {
		setTimeout( function () {
			console.log(`getting file ${url}`)
			resolve(url)
		},1000 * Math.random())
	})
}


var extractFile = function (fileName) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			console.log(`extracting file ${fileName}`)
			resolve(fileName)
		},1000 * Math.random())
	})
}


var downloadAndExtract = function (url) {
	return downloadFile(url).
	then( function( result) {
		return extractFile(result)
	})
}


var main = function () {
	Promise.all([downloadAndExtract('url1'), downloadAndExtract('url2')]).then( function(results) {
		console.log(`${results[0]}, ${results[1]}`)
	}).catch(function (error) {
		console.log(error)
	})
}

main()
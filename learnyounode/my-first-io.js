'use strict'

var fs = require('fs')

var filePath = process.argv[2]
var content = fs.readFileSync(filePath);
var lines = content.toString().split('\n')
console.log(lines.length - 1)

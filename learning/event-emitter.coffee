util = require 'util'
fs = require 'fs'
EventEmitter = require('events').EventEmitter
counter = 0


inputChecker = (name, file) ->
# inputchecker(name, file) ->
	this.name = name
	this.writeStream = fs.createWriteStream('./'+file+'.txt', {
		flags: 'a'
		encoding: 'utf-8'
		mode: '0666'
	});
	this

# outputChecker(name, file) ->
# 	console.log name, file

# inherits the prototype of EventEmitter
util.inherits inputChecker, EventEmitter

inputChecker.prototype.check = (input) ->
	command = input.toString().trim().substr(0,3)
	if command == 'wr:'
		this.emit 'write', input.substr(3, input.length)
	else if command == 'en:'
		this.emit 'end'
	else
		this.emit 'echo', input

ic = new inputChecker('Shelley', 'output')

ic.on 'write', (data) ->
	this.writeStream.write(data, 'utf-8')
ic.on 'echo', (data) ->
	console.log this.name+ ' wrote '+ data
ic.on 'end', () ->
	process.exit()


process.stdin.resume()
process.stdin.setEncoding('utf-8')
process.stdin.on 'data', (input) ->
	ic.check input

console.log 'this: ', this
# console.log 'global: ', global
console.log 'require.cache: ', require.cache



# em = new EventEmitter()

# setInterval () ->
# 	em.emit('timed', counter++)
# , 3000

# em.on 'timed', (data) ->
# 	console.log 'timed '+ data

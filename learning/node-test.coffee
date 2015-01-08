# net = require 'net'

console.log '__dirname: ', __dirname
console.log 'v: ', v

v = 1  # declaration part is hoisted to the top of scope

console.log 'v: ', v


digit_name = () ->
	names = ['zero', 'one', 'two', 'three']

	return (n) ->
		return names[n]


console.log disit_name(2)
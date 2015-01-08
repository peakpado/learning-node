a = 10

foo()

foo = ->
	console.log([a, b])
	a = 20
	b = 30

foo();
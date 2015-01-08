http = require 'http'

options = {
	method: 'GET'
	# socketPath: '/tmp/server-sock3'
	host: 'localhost'
	port: 8124
	path: '/?file=main.txt'
}

req = http.request options, (res) ->
	console.log 'status: ', res.statusCode
	console.log 'headers: ', JSON.stringify res.headers
	res.setEncoding 'utf-8'
	res.on 'data', (chunk) ->
		console.log 'chunk: ', chunk

req.on 'error', (err) ->
	console.log 'problem with request', err.message

req.write 'data\n'
req.write 'data\n'
req.end()
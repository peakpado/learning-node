
http = require 'http'
fs = require 'fs'
url = require 'url'
querystring = require 'querystring'


http.createServer (req, res) ->
	console.log 'client connected'
	global.req = req 
	global.res = res 

	query = url.parse(req.url).query
	console.log 'query: ', query
	file = querystring.parse(query).file 

	res.writeHead 200, {'Content-Type': 'text/plain'}

	res.write i+'\n' for i in [0..3]
	data = fs.readFileSync file, 'utf-8'
	res.write data
	res.end()
.listen '8124'

console.log 'listening on 8124'


repl = require 'repl'
repl.start ">>", null, null, true, false
/**
 * Created by pado on 5/30/15.
 */

var http = require('http'),
  fs = require('fs');

// req: IncomingMessage, res: ServiceResponse

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  if (req.url === '/file.txt') {
    fs.createReadStream(__dirname+'/file.txt').pipe(res);
  } else {
    res.end('Hello world');
  }
}).listen(3000);

console.log('server is running');


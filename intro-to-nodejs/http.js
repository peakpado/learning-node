/**
 * Created by pado on 5/30/15.
 */

var http = require('http');

var url = 'http://www.google.com';

var options = {
  host: 'www.google.com',
  port: 80,
  path: '/',
  method: 'GET'
};

// http.request returns http.ClientRequest object,
// response is IncomingMessage object
var req = http.request(url, function (response) {
  console.log(response.statusCode);
  response.pipe(process.stdout);
});

req.end();
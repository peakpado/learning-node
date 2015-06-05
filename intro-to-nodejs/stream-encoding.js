/**
 * Created by pado on 6/5/15.
 */

var stream = require('stream');

process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
  console.log('chunk:', chunk);
});

var ws = new stream.Writable();
var ret = ws.setDefaultEncoding('utf8');
console.log('ret:', ret);

ws._write = function (chunk, encoding, next) {
  console.log(chunk.toString(), encoding);
  next();
};

//rs.setEncoding('utf8');

process.stdin.pipe(ws);
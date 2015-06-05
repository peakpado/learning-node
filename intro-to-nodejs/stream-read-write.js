/**
 * Created by pado on 6/4/15.
 */

var stream = require('stream');

var a = 0, b = 1;

// Readable produce the data
var rs = new stream.Readable();

rs._read = function () {
  if (b < 144) {
    c = a + b;
    this.push(''+c); // push expects string

    a = b;
    b = c;
  } else {
    this.push(null); // end of stream
  }
};

//rs.pipe(process.stdout);


var ws = new stream.Writable();

ws._write = function (chunk, encoding, next) {
  console.log(chunk.toString(), encoding);
  next();
};

rs.setEncoding('utf8');

rs.pipe(ws);

module.exports = {
  readStream: rs,
  writeStream: ws
};
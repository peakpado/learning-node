/**
 * Created by pado on 6/5/15.
 */

var stream = require('stream');

var a = 0, b = 1;

// Readable produce the data
var rs = new stream.Readable({objectMode: true});

var object = [
  {name: 'hj'},
  {name: 'jae'}
];

var i = 0;
rs._read = function () {
  if (i < object.length) {
    this.push(object[i]); // push expects string
    this.push({marker: 'this is a marker'});
    i ++;
  } else {
    this.push(null); // end of stream
  }
};

//rs.pipe(process.stdout);


var ws = new stream.Writable({objectMode: true});

ws._write = function (chunk, encoding, next) {
  console.log(chunk.toString(), encoding);
  console.log('chunk:', chunk);
  next();
};

//rs.setEncoding('utf8');

rs.pipe(ws);


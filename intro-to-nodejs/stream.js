/**

 stream is an instance of (and extensions to) EventEmitter with agreed upon stream interface
 - unified abstraction for managing data flow, including network traffic, file I/O, stdin/stdout/stderr

 four type of streams:
 - Readable, Writable, Duplex or Transform

 stream can be either Readable or Writable or both(Duplex)

 A Readable stream can be piped to a Writable stream
 - handle flow control

 */

var request = require('request');

var s = request('http://www.pluralsight.com/');

//s.on('data', function (chunk) {
//  console.log('>>>Data>>>', chunk.toString());
//});
//
//s.on('end', function () {
//  console.log('Done:');
//});

console.log(process.stdout.writable);
process.stdout.write('Hello');
process.stdout.write('World!');

s.pipe(process.stdout);
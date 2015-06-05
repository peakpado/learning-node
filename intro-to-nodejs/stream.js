/**

 stream is an instance of (and extensions to) EventEmitter with agreed upon stream interface
 - unified abstraction for managing data flow, including network traffic, file I/O, stdin/stdout/stderr

 four type of streams:
 - Readable, Writable, Duplex or Transform

 stream can be either Readable or Writable or both(Duplex)

 A Readable stream can be piped to a Writable stream
 - handle flow control

 stream.Readable:
 - source of data
 - events: readable, data, end, close, error
 - methods: setEncoding(encoding), read(size), resume(), pause(), isPaused(), pipe(dest), unpipe(buf), unshift(), wrap(oldStream)

 stream.Writable:
 - the destination of data
 - events: drain, finish, pipe, unpipe, error
 - methods: write(chunk, encoding, callback), cork()/uncork(), setDefaultEncoding(encoding), end(chunk, encoding, callback)

 Implementing stream:
 - extend the appropriate parent stream class, use util.inherits(child, parent) which links the prototype
 - call the appropriate parent class constructor
 - implement one or more specific methods

 Readable: _read(size)
 Writable: _write(chunk, encoding, callback)
 Duplex: _read, _write
 Transform: _transform(chunk, encoding, callback), _flush(callback)

 */


var request = require('request');

var s = request('http://www.pluralsight.com/');

//s.on('data', function (chunk) {
// // chunk is Buffer
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
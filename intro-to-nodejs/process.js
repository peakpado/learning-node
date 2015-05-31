/**
 * Created by pado on 5/30/15.
 */
'use strict';

var util = require('util');

process.stdin.resume();
//process.stdin.setEncoding('utf8');

// no encoding is set, Buffer is returned
// when encoding is set, the encoded string is returned

process.stdin.on('data', function (chunk) {
  //process.stdout.write('Data: ' + chunk);
  console.log('typeof chunk:', typeof chunk, chunk instanceof Buffer, chunk instanceof String);
  console.log('Data: Buffer:'+chunk);
});

// Ctrl-D trigger end event
process.stdin.on('end', function () {
  process.stderr.write('End:');
  xxx = process.xxx;
});


// exit event
process.on('exit', function (exitCode) {
  console.log('exit:', exitCode);
});

// uncaughtException event
process.on('uncaughtException', function (err) {
  console.trace('stacktrace');
  console.log('uncaughtException:', util.inspect(err));
});

console.log('node is running as process # ', process.pid);
var child_process = require('child_process');
var fs = require('fs');
var assert = require('assert');

console.log('pareent pid: ' + process.pid);

var spawn = require('child_process').spawn,
  // command, argument, options
  ls  = spawn('ls', ['-al'], { stdio: 'inherit' });

console.log('Spawned child pid: ' + ls.pid);


// ls.stdout.on('data', function (data) {
//   console.log('stdout: ' + data);
// });

// ls.stderr.on('data', function (data) {
//   console.log('stderr: ' + data);
// });

ls.on('close', function (code) {
  console.log('child process exited with code ' + code);
});


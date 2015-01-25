
var child_process = require('child_process');
var fs = require('fs');
var assert = require('assert');

var child = child_process.spawn("ls", {
    stdio: [
      0, // use parents stdin for child
      'pipe', // pipe child's stdout to parent
      fs.openSync("err.out", "w") // direct child's stderr to a file
    ]
});

child.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});

assert.equal(child.stdio[0], null);
assert.equal(child.stdio[0], child.stdin);

assert(child.stdout);
assert.equal(child.stdio[1], child.stdout);

assert.equal(child.stdio[2], null);
assert.equal(child.stdio[2], child.stderr);
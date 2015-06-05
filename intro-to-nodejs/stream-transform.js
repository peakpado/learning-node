/**
 * Created by pado on 6/4/15.
 */

var stream = require('stream');

var trans = stream.Transform();   // scope safe constructor

trans._transform = function (chunk, encoding, done) {
  this.push(chunk.toString().split('').map(function (char) {
    return String.fromCharCode(char.charCodeAt(0) + 1);
  }).join(''));
  done();
};

process.stdin.pipe(trans).pipe(process.stdout);
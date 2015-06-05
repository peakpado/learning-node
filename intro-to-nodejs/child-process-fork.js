/**
 * Created by pado on 5/30/15.
 */

var fork = require('child_process').fork;

var child = fork(__dirname + '/double-child.js');

child.on('message', function (m) {
  console.log('The child answer:', m.answer);
  child.send({cmd: 'done'});
});


child.send({cmd: 'double', number: 20});
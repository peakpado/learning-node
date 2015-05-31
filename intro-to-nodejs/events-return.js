/**
 * Created by pado on 5/30/15.
 */

var EventEmitter = require('events').EventEmitter;

var getResource = function (c) {
  var e = new EventEmitter();
  process.nextTick(function () {
    var count = 0;
    e.emit('start');

    var t = setInterval(function () {
      e.emit('data', ++count);
      if (count === c) {
        e.emit('end', count);
        clearInterval(t);
      }
    }, 100);
  });
  return e;
};

var res = getResource(5);

res.on('start', function () {
  console.log('started');
});

res.on('data', function (d) {
  console.log('data:', d);
});

res.on('end', function (t) {
  console.log('done:', t);
});
/**
 * Created by pado on 5/30/15.
 */

var util = require('util'),
  EventEmitter = require('events').EventEmitter;

function Resource(m) {
  var self = this;

  EventEmitter.call(this);

  process.nextTick(function () {
    var count = 0;
    self.emit('start');

    var t = setInterval(function () {
      self.emit('data', ++count);
      if (count === m) {
        self.emit('end', count);
        clearInterval(t);
      }
    });
  });
}

// set Resource.prototype with Object.create(EventEmitter)
util.inherits(Resource, EventEmitter);


//function Foo() {
//
//}
//
//Foo.prototype = Object.create(EventEmitter);
//Foo.constructor = Foo;

module.exports = Resource;
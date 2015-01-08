
// this rules
// 1. new binding
// 2. explicit binding: call, apply and bind
// 3. implicit binding with owning object
// 4. default binding: global or undefined (in strict mode)


'use strict';

// classical OO style

function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function() {
  return 'I am ' + this.me;
};

function Bar(who) {
  Foo.call(this, who);
}
Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function() {
  console.log('Hello, '+this.identify());
};

var b1 = new Bar('b1');
var b2 = new Bar('b2');

b1.speak();
b2.speak();


// OLOO(Object linked to other object) style

Foo = {
  init: function(who) {
    this.me = who;
  },
  identify: function() {
    return 'I am ' + this.me;
  }
};

Bar = Object.create(Foo);
Bar.speak = function() {
  console.log('Hello, ' + this.identify());
};

b1 = Object.create(Bar);
b1.init('b1');
b2 = Object.create(Bar);
b2.init('b2');

b1.speak();
b2.speak();

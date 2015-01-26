
// this rules
// 1. new binding
// 2. explicit binding: call, apply and bind
// 3. implicit binding with owning object
// 4. default binding: global or undefined (in strict mode)


'use strict';

// classical OO style

// function Foo(name) {
//   this.name = name;
// }

// // prototype is used to share methods
// Foo.prototype.getName = function() {
//   return 'I am ' + this.name;
// };

// function Bar(name) {
//   // call supertype constructor to avoid a duplicated code
//   Foo.call(this, name);
// }
// Bar.prototype = Object.create(Foo.prototype);

// // customize Bar
// Bar.prototype.speak = function() {
//   console.log('Hello, '+this.getName());
// };

// var b1 = new Bar('b1');
// var b2 = new Bar('b2');

// b1.speak();
// b2.speak();


// OLOO(Object linked to other object) style

var Foo = {
  init: function(name) {
    this.name = name;
  },
  getName: function() {
    return 'I am ' + this.name;
  }
};

// object inherits from other object directly
var Bar = Object.create(Foo);
// customize Bar
Bar.speak = function() {
  console.log('Hello, ' + this.getName());
};

var b1 = Object.create(Bar);
b1.init('b1');
var b2 = Object.create(Bar);
b2.init('b2');

b1.speak();
b2.speak();

/**
 * Created by pado on 5/30/15.
 */

function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function () {
  return 'I am ' + this.me;
};

function Bar(who) {
  Foo.call(this, who);
}

// Bar.prototype = new Foo();
Bar = Object.create(Foo.prototype);
// Note: .constructor is broken here, need to fix

Bar.prototype.speak = function () {
  console.log('Hello ' + this.identify());
};

var b1 = new Bar('b1');
var b2 = new Bar('b2');

b1.speak();
b2.speak();

console.log(b1.constructor);  // Foo


/**
 * Created by pado on 5/30/15.
 */

// remove all prototype setting

//function Foo(who) {
//  this.me = who;
//}

// 3. Remove prototype
//Foo.prototype.identify = function () {
//  return 'I am ' + this.me;
//};

var Foo = {
  init: function (who) {
    this.me = who;
  },
  identify: function () {
    return 'I am ' + this.me;
  }
};

//function Bar(who) {
//  Foo.call(this, who);
//}

// Bar.prototype = new Foo();
var Bar = Object.create(Foo);
// Note: .constructor is broken here, need to fix

// 2. Remove .prototype setting
//Bar.prototype.speak = function () {
//  console.log('Hello ' + this.identify());
//};
Bar.init = function (who) {
  Foo.call(this, who);
};
Bar.speak = function () {
  console.log('Hello ' + this.identify());
};

// 1. Remove all new constructor call, code becomes two lines, creating and initializing
//var b1 = new Bar('b1');
var b1 = Object.create(Bar);
//Bar.call(b1, 'b1');
b1.init('b1');
b1.speak();

console.log(b1.constructor);  // Foo
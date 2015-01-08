
// this rules
// 1. new binding
// 2. explicit binding: call, apply and bind
// 3. implicit binding with owning object
// 4. default binding: global or undefined (in strict mode)

function baz() {
  var self = this;
  console.log('baz');
  bar();
}

function bar() {
  var self = this;
  console.log('bar');
  foo();
}

//'use strict';

function foo(obj) {

  // inside function, default binding is global
  var self = this;
  this.id = obj;
  console.log('foo');
  // console.log(obj, this.id);
  // console.log('obj1:', obj);
  // obj = 'changed';
}

// In nodejs, each file is a module, this is an object, not global
var id = 2;
global.id = 'global-id';

var obj = {
  id: 'object-id'
};

// object is passed by reference, the modification is returned
// primitive is passed by value, the modification is not returned
foo(obj);
console.log('foo:', foo.id);

// library methods has context that becomes this, internally it invoke call or apply
// [1, 2, 3].forEach(foo, obj);

// var bar = new foo(2);
// console.log('bar.id:', bar.id);
var ø = 1;  // DMZ object
console.log(ø);
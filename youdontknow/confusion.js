/* 1. What's this?

scope and this: 
  - The scope is where JS identifier is found, not accessible from code, JS engine part, defined in author-time.
  - The this is context object exists in every JS scope, bound in run-time as a part of execution context

four rules how to find this:
  - default binding: this is global when it's called in function standalone.
  - implicit binding: this is container object when it's called as object reference
  - explicit binding: call or apply
  - new binding:
*/

var _ = require('lodash');

// confusion
// - this is not function itself

console.log('this:', this);   // empty object in nodejs
// console.log('global:', global);
// console.log('module:', module);

// list all loaded modules
// var loadedModules = Object.keys(require('module')._cache);
// console.log('loadedModules:', loadedModules);
console.log('require.cache:', require.cache);

function foo(num) {
  console.log('foo:', num);
  // console.log('foo this:', this);   // this is global object
  // the this is global object by default binding
  this.count ++;
}

foo.count = 0;
var i;
for (i=0; i<10; i++) {
  if (i>7) {
    foo(i);
  }
}

console.log(foo.count);
console.log('global.foo:', global.foo);
console.log('this.foo:', this.foo);
console.log('foo:', foo);

// - this is not scope

// function foo2() {
//   var a = 2;
//   this.bar();
// }

// function bar() {
//   console.log(this.a);
// }

// foo2();
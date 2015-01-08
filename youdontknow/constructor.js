

function Foo(name) {
  this.name = name;
}

Foo.prototype.myName = function() {
  return this.name;
}

// when a function is called with new, it creates new object and links Function.prototype 
// to newly created object [[Prototype]]
var a = new Foo('a');
var b = new Foo('b');

console.log(a.myName());
console.log(b.myName());

// the 'constructor' is a property in Foo.prototype
console.log('Foo.constructor === Foo:', Foo.constructor === Foo);
console.log('a.constructor === Foo.constructor:', a.constructor === Foo.constructor);   // true

// the 'constructor' is non-enumerable property, but writable
// the 'constructor' property is not reliable, don't use it
Foo.prototype = {};
var a1 = new Foo();
console.log('a1.constructor === Foo:', a1.constructor === Foo);  // false
console.log('a1.constructor === Object:', a1.constructor === Object); // true
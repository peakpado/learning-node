
// all functions by default gets a public, non-enumerable property called 'prototype'

function Foo() {

}

// this.prototype = {constructor: this}
Foo.prototype;  // {}

// to see all properties including non-enumerable, use Object.getOwnPropertyNames(o)
console.log('Foo.prototype:', Object.getOwnPropertyNames(Foo.prototype));
// [ 'constructor' ]


// create an instance object from Foo constructor
var o = new Foo();

// Each object created from calling new Foo() will end up [[Prototype]]-linked to Foo.prototype
Object.getPrototypeOf(o) === Foo.prototype;   // true
o.__proto__ === Foo.prototype;

Foo.prototype.constructor === Foo;
Foo.prototype.__proto__ === Object.prototype;

// Object is a constructor function
Object.__proto__ === Function.prototype;   // true


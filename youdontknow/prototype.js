
// all functions by default gets a public, non-enumerable property called 'prototype'

function Foo() {

}

Foo.prototype;  // {}

// Each object created from calling new Foo() will end up [[Prototype]]-linked to this Foo.prototype

var o = new Foo();

Object.getPrototypeOf(o) === Foo.prototype;   // true
Object.__proto__ === Foo.prototype;   // true


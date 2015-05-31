/**
 * Javascript is compiled.
 * - compiler phase: processes variable and function declarations and register variables to the scope
 * - execution phase: engine executes code
 */

//'use strict';

// global scope
var foo = "bar";

function bar() {
  // register foo to the scope bar, foo is shadowed
  var foo = "baz";
  console.log('bar foo:', foo);
}

function baz(foo) {
  // named parameter is local variable, foo is in local scope baz
  foo = "bam";

  // in strict mode: bam causes ReferenceError
  // non strict mode: go to outer scope, in global the lhs is just created.
  bam = "yay";
}

console.log('foo:', foo);
bar();
baz('another foo');
/**
 * Created by pado on 5/29/15.
 */

// don't use eval: eval modifies the lexical scope, optimization is turned off
var bar = 'bar';

function foo(str) {
  eval(str);  // cheating lexical scope!
  console.log(bar);   // 42
}

foo('var bar = 42;');


// don't use with: with creates a new scope at run time

var obj = {
  a: 2,
  b: 3,
  c: 4
};

obj.a = obj.b + obj.c;

with(obj) {
  a = b + c;

  d = 3;
}

console.log(obj.d);    // undefined
console.log(d); // 3 in global scope non-strict mode
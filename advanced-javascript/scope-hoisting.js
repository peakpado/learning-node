/**
 * Created by pado on 5/29/15.
 */

// compiler pulls the declarations out first

var a = b();
var c = d();

console.log(a);
console.log(c);

function b() {
  return c;
}

// function expression is not hoisted
var d = function() {
  return b();
};

// this is compiled code

function b() {
  return c;
}

var a;
var c;
var d;

a = b();
c = d();    // d is undefined

console.log(a);
console.log(c);

d = function() {
  return b();
};
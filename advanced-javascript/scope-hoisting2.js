/**
 * Created by pado on 5/29/15.
 */


// function is hoisted first
// later declaration overrides the previous declaration

foo();  // 'foo'

var foo = 2;

function foo() {
  console.log('bar');
}

function foo() {
  console.log('foo');
}
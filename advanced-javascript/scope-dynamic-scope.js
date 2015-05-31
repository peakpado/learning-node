/**
 * Created by pado on 5/29/15.
 */

// theoretical dynamic scoping

function foo() {
  console.log(bar);   // dynamic: go back stacktrace to find a variable, it's runtime scope
}

function baz() {
  var bar = 'bar';
  foo();
}

baz();
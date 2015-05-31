/**
 * Created by pado on 5/29/15.
 */

/**
 Every function, while executing, has a reference to its current execution context, called this.
  -> this is JavaScript's version of dynamic scope

 Four rules to determine this object at run-time, based on call-site.

 1. default binding: this is undefined in strict mode , this is global in non-strict mode
 2. implicit binding:
 3.

 */

function foo() {
  console.log(this.bar);
}

var bar = 'bar1';
var o2 = {bar: 'bar2', foo: foo};
var o3 = {bar: 'bar3', foo: foo};

foo2 = o2.foo;


foo();      // 'bar1', default binding
foo2();     // 'bar1', default binding
o2.foo();   // 'bar2', implicit binding, callsite is object property
o3.foo();   // 'bar3', implicit binding



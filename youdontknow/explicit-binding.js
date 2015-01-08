
// Explicit binding:

// function foo() {
//   console.log(this.a);
// }

var obj = {
  a: 2,
  id: 'awesome'
};

// foo.call(obj);

// var bar = function() {
//   foo.call(obj);   // hard-binding
// }

// bar();

// works with callback
// setTimeout(bar, 100);
// bar.call(global);


// bind function

// function foo(something) {
//   console.log(this.a, something);
//   return this.a + something;
// }

// function bind(fn, obj) {
//   return function() {
//     return fn.apply(obj, arguments);
//   };
// }

// var bar = bind(foo, obj);
// var b = bar('something');
// console.log(b);


// API call context parameter
function foo(el) {
  console.log(el, this.id);
}

[1, 2, 3].forEach(foo, obj);
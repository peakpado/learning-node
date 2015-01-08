
function foo(something) {
  this.a = something;
}

var obj = {

};

var bar = foo.bind(obj);
bar(2);
console.log(obj.a); // 2

// new return new object, new override the hard binding.
// this is useful and create a function to ignore the harding
var baz = new bar(3);
console.log(obj.a); // 2
console.log(baz.a); // 3


// The arguments in bind call becomes arguments of bound function.
// This is currying.

function foo2(p1, p2) {
  this.val = p1 + p2;
}

var bar2 = foo2.bind(null, 'p1');
var baz2 = new bar2('p2');
console.log(baz2.val);  // p1p2

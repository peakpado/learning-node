/**
 * Created by pado on 5/29/15.
 */


function foo() {
  console.log(this.bar);
}

var bar = 'bar1';
var obj = {bar: 'bar'};
var obj2 = {bar: 'bar2'};

foo();
foo.call(obj);    // explicit binding


// hard-binding: always use the same object

var orig = foo;
foo = function () {
  orig.call(obj);
};

foo.call(obj2);   // still use obj


// bind utility function does this
function bind(fn, o) {
  return function () {
    fn.call(o);
  }
}

foo = bind(foo, obj);
foo();
foo.call(obj2);



// better way: add bind() method to Function.prototype

if (!Function.prototype.bind2) {
  Function.prototype.bind2 = function (o) {
    var fn = this;
    return function() {
      return f.apply(o, arguments);
    }
  }
}

foo = foo.bind2(obj);

foo('baz');

// bind is very useful method
// ES5 added Function.prototype.bind, see MDN Function.prototype.bind
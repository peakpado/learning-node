
// default binding is used if null or undefine is passed in call, apply and bind.
function foo() {
  // in browser, this is a global object 'window'
  // in nodejs, this is a global boject 'global'
  console.log(this.a);
}

// in browser, it's global scope
// in nodejs, it's local module scope
var a = 'global';
global.a = 'global-a';  // in nodejs

foo.call(null);


// to prevent the global becomes this, pass emtpy object 'safe this'.

var obj = {};
var empty = Object.create(null); // it's prototype is null, so more empty than {}

function foo2(a, b) {
  console.log('a:', a, ', b:', b);
}

// spreading out array as parameters
foo2.apply(empty, [2, 3]);

// currrying with bind()
var bar = foo2.bind(empty, 2);
bar(3);


// when a function is indirectly referenced, default binding rule applies.
// the indirect reference happens from an assignment.

var o = {
  a: 3,
  foo: foo
};
var p = {
  a: 4
};

o.foo(); // 3
(p.foo = o.foo)();  // global-a, this is global
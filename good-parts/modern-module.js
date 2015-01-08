
var MyModules = (function Manager() {
  var modules = {};

  function define(name, deps, impl) {
    for (var i=0; i<deps.length; i++) {
      deps[i] = modules[deps[i]];
    }
    // non-strict mode, undefined becomes global
    modules[name] = impl.apply(impl, deps);
  }

  function get(name) {
    return modules[name];
  }

  return {
    define: define,
    get: get
  };

})();

MyModules.define('bar', [], function() {
  console.log('define bar: this:', this);
  function hello(who) {
    return 'Let me introduce: ' + who;
  }

  return {
    hello: hello
  };

});

MyModules.define('foo', ['bar'], function(bar) {
  var hungry = 'hippo';

  function awesome() {
    console.log(bar.hello(hungry).toUpperCase());
  }

  return {
    awesome: awesome
  };
});

var bar = MyModules.get('bar');
console.log('bar:', bar);

var foo = MyModules.get('foo');
console.log('foo:', foo);

console.log(bar.hello('hippo'));
foo.awesome();



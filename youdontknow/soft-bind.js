
// this rules
// 1. new binding
// 2. explicit binding: call, apply and bind
// 3. implicit binding with owning object
// 4. default binding: global or undefined (in strict mode)



//'use strict';

if (!Function.prototype.softBind) {
  Function.prototype.softBind = function(obj) {
    var fn = this;
    // capture any curried parameters
    var curried = [].slice.call(arguments, 1);
    
    var bound = function() {
      // console.log('this:', this);
      return fn.apply(
        
        // use the obj only if this is undefined or global
        (!this || this === (global)) ? obj : this,
        curried.concat.apply(curried, arguments)
      );
    };
    bound.prototype = Object.create(fn.prototype);
    return bound;
  }
}

function foo() {
  console.log('name:', this.name);
}

var obj = {name: 'obj'},
  obj2 = {name: 'obj2'},
  obj3 = {name: 'obj3'};

var fooObj = foo.softBind(obj);
//fooObj(); // obj

obj2.foo = foo.softBind(obj);
//obj2.foo(); // obj2

//fooObj.call(obj3);  // obj3

setTimeout(obj2.foo, 100);


// fat-arrow in ES6: lexically inherited this.
// not supported in current nodejs

// function demo() {
//   setTimeout(() => {
//     console.log(this.name);
//   }, 100);
// }

// demo.call(obj);

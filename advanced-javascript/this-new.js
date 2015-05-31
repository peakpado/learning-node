/**
 * Created by pado on 5/29/15.
 */

/**
 new keyword makes constructor call.
 1. new empty object is created
 2. object is linked with Function.prototype
 3. new object is bound to this
 4. return this
 */

function foo() {
  this.baz = 'baz';
  console.log(this.bar + ' ' + baz);
}

/**
 1. Was the function called with 'new'?
 2. Was the function called with call or apply specifying an explicit this?
 3. Was the function called via a containing/owning object(context)?
 4. Default: global object(undefined in strict mode)

 */
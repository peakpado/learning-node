/**
 * Created by pado on 5/29/15.
 */

var foo;

undefined = 'xxx';
console.log(undefined); // this is still 'undefined'

try {
  foo.length;
} catch (err) {       // catch is block scope
  console.log(err); // error is TypeError: Cannot read property 'length' of undefined
}

console.log(err);   // ReferenceError





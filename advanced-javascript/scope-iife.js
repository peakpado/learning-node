/**
 * Created by pado on 5/29/15.
 */

var foo = 'foo';

// IIFE: most powerful feature in JS.

// using function declaration pollutes global scope
// () makes function expression, function is not the first word
(function() {
  // function creates a new scope
  // IIFE makes private scope
  var foo = 'foo2';
  console.log(foo);
})();

console.log(foo);

// wrap the private codes with IIFE, only expose public method

(function(bar) {
  var foo = bar;
  console.log(foo);   // 'foo
})(foo);

console.log(foo);

// typically pass window, jQuery
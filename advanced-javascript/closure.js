/**
 * Created by pado on 5/29/15.
 */

/**
 Closure is when a function "remembers" its lexical scope even when the function is executed
 outside that lexical scope.

 - it's not copy of lexical scope, it's live reference
 - closure is needed when function is the first class object and passed around, function remembers its lexical scope
 */

for (var i=1; i<=5; i++) {
  setTimeout(function () {
    console.log('i: '+i);
  }, i*1000);
}


//use IIFE

for (var i=1; i<=5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log('i: '+ i);
    }, i*1000);
  })(i);
}
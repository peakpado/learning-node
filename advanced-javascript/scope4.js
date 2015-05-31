/**
 * Created by pado on 5/29/15.
 */

var foo = 'bar';

function bar() {
  var foo = 'baz';

  function baz(foo) {
    foo = 'bam';
    bam = 'yay';
  }

  baz();
}

bar();
console.log(foo);   // bar
console.log(bam);   // yay
//baz();  // ReferenceError

// lexical scope: compile time, author time scope is determined
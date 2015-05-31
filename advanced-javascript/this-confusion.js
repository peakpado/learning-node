/**
 * Created by pado on 5/29/15.
 */

// it's my code
function foo() {
  // try to expect the third-party library uses my local variable bar.
  // try to cross lexical scope to dynamic scope this, this does not work!
  var bar = 'bar1';
  baz();
}

// suppose it's third-party library, know it uses bar property
function baz() {
  console.log(this.bar);
}

var bar = 'bar2';
foo();    //


// best solution in SO, but it does not work

function foo() {
  var bar = 'bar1';
  this.baz = baz;
  this.baz();
}

function baz() {
  console.log(this.bar);
}

var bar = 'bar2';
foo();    // 'bar2'
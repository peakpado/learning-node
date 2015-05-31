/**
 * Created by pado on 5/29/15.
 */

// function expression: very first word in the statement is not function

// function declaration: registered to the outer scope
// named function expression: the name is registered to its own scope

// always use named function:
// anonymous function:
  // - no way to refer the anonymous function
  // - name in stack trace, help debugging
  // self documenting

var foo = function bar() {
  var foo = "baz";

  function baz(foo) {
    foo = bar;
    foo;
  }
  baz();
};

foo();
bar();    // Error!

function CoolModule() {
  var something = 'cool';
  var another = [1,2,3];

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join('!'));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
}

console.log(this);
console.log(global);

var foo = CoolModule();
foo.doSomething();
foo.doAnother();
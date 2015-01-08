
// Object.prototype: top of prototype chain, they become instance methods
// Object.getOwnProertyNames(): a property in Object function, they become class methods

// shadowing: when a proprty is assigned and the property is in the higher prototype chain
// 1. if the property in higher prototype chain has setter, then setter is called.
// 2. if the property in higher prototype chain read-only(writable: false), the assignment fails.
// 3. shadowing happens, meaning new property is created in the current object.

// 1 and 2 only apply to the assignment, Object.defineProperty always creates a shadowing.

// The shadowing is more complicated, so it's the best to avoid it!

var anotherObj = {
  a: 2
};

var myObj = Object.create(anotherObj);

console.log(anotherObj.a);  //2
console.log(myObj.a); //2

console.log(anotherObj.hasOwnProperty('a'));  // true
console.log(myObj.hasOwnProperty('a'));   // false

// oops, the shadowing happens implicitly
myObj.a ++;

console.log(anotherObj.a);  //2
console.log(myObj.a); //3

console.log(myObj.hasOwnProperty('a'));   // true
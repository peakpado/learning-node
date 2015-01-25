
// Constructor function
function Person(name) {
  this.name = name;
}

// Prototype
Person.prototype = {
  constructor: Person,

  sayName: function () {
    console.log(this.name);
  },

  toString: function () {
    return '[Person ' + this.name + ']';
  }
};

var hj = new Person('HJ');
console.log(hj.sayName());
console.log(hj.toString());

Person.prototype.sayHi = function() {
  console.log('Hi');
}

console.log(hj.sayHi());
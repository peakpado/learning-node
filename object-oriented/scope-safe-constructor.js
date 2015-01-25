
// constructor that can be called with new or without new

function Person(name) {
  if (this instanceof Person) {
    // called with new
    this.name = name;
  } else {
    // called without new
    return new Person(name);
  }
}

var person1 = new Person('hj');
var person2 = new Person('Greg');
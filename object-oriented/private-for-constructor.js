
// private data for constructor: custom types that requrie own private properties

function Person(name) {
  // define a variable only accessible inside of Person constructor
  var age = 25;

  this.name = name;

  this.getAge = function() {
    return age;
  }

  this.growOlder = function() {
    age ++;
  }

}

ver person = new Person('hj');
console.log(person.getAge());


// a private data that's shared across all instances

var Person = (function() {
  // everyone shares the same age
  var age = 25;

  function InnerPerson(name) {
    this.name = name;
  }

  InnerPerson.prototype.getAge = function() {
    return age;
  };

  InnerPerson.prototype.growOlder = function() {
    age ++;
  };

  return InnerPerson;
}());

var person1 = new Person('HJ');
var person2 = new Person('Jenny');

// module pattern: object-creation pattern that creates objects with private data

var person = (function() {
  var age = 25;

  return {
    name: 'HJ',
    getAge: function() {
      return age;
    },
    growOlder: function() {
      age ++;
    }
  };
}()); // IIFE

console.log(person.name);
console.log(person.getAge());
person.age = 100;
console.log(person.getAge());
console.log(person.age);


// revealing module pattern: put all variables and methods at the top of IIFE and 
// simply assigns them tot he returned object.

var person = (function() {
  var age = 25;

  function getAge() {
    return age;
  }

  function growOlder() {
    age ++;
  }

  return {
    name: 'HJ',
    getAge: getAge,
    growOlder: growOlder
  };
}()); // IIFE
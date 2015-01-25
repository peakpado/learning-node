
var person = {
  name: 'hj',
  age: 46
};

// to detect property, in operator should be used 
// since it doesn't evaluate the value of property.
// in operator return true for its own and prototype property
console.log( 'name' in person); // true
console.log( 'toString' in person); // true

// it check own property, use hasOwnProperty()
console.log(person.hasOwnProperty('name')); // true

// for in enumerates only own property
for (prop in person) {
  console.log(prop, person[prop]);
}

// Object.keys(obj) to get array of properties, only returns own properties
var properties = Object.keys(person);
console.log(properties);
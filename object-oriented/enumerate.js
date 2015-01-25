
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

// for in enumerates own enumerable properties and prototype properties
for (prop in person) {
  console.log(prop, person[prop]);
}

// Object.keys(obj) to get array of properties, only returns own enumerable properties
var properties = Object.keys(person);
console.log(properties);

// Object.getOwnPropertyNames(): retruns an array of all properties(enumerable or not)

// > Object.getOwnPropertyNames(Object.prototype)
// [ 'constructor',
//   'toString',
//   'toLocaleString',
//   'valueOf',
//   'hasOwnProperty',
//   'isPrototypeOf',
//   'propertyIsEnumerable',
//   '__defineGetter__',
//   '__lookupGetter__',
//   '__defineSetter__',
//   '__lookupSetter__' ]




ver person = {
  name: 'hj'
};

// Preventing extension
//Object.preventExtensions: set [[Extensible]] to false, prevent adding new properties
Object.preventExtensions(person);
console.log(Object.isExtensible(person)); //false

// Sealing object
//Object.seal(): set [[Extensible]] and [[Configurable]] to false
person = {
  name = 'hj'
};

// can't add new property
// can't delete the existing properties
// but can change the value of existing properties
Object.seal(person);
Object.isSealed(person);

// Freezing object
// the frozen object is a sealed object where data properties are read-only
Object.freeze(person);
Object.isFrozen(person);

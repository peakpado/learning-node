// property attribute: data property and accessor property
var person1 = {};

// data property
Object.defineProperty(person1, 'name', {
  value: 'hj',
  enumerable: true,
  configurable: true,
  writable: true
});

console.log('name' in person1);
console.log(person1.name);

// accessor property
var person1 = {
  _name: 'hj'
};

Object.defineProperty(person1, 'name', {
  get: function() {
    console.log('Reading name');
    return this._name;
  },
  set: function(value) {
    console.log('Setting name to $s', value);
    this._name = value;
  },
  enumerable: true,
  configurable: true
});

console.log('name' in person1);
console.log(person1.name);

// Object.getOwnPropertyDescriptor()
var desc = Object.getOwnPropertyDescriptor(person1, 'name');
console.log('desc:', desc);
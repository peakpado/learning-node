// when a function is created, its prototype property is created from Object.prototype
// and constructor property is added to prototype
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length + this.width;
};

Rectangle.prototype.toString = function() {
  return '[Rectangle '+this.length+'x'+this.width+']';
};

// inherits from Rectangle
function Square(size) {
  // this.length = size;
  // this.width = size;

  // another way to create properties by calling supertype constructor
  // it's better no duplicated property definition
  Rectangle.call(this, size, size);

  // then overide the existing one or add new
}

// Square.prototype = new Rectangle();
// Square.prototype.constructor = Square;  // fix constructor

// another way to link a prototype
Square.prototype = Object.create(Rectangle.prototype, {
                      constructor: {
                        configurable: true,
                        enumerable: true,
                        value: Square,
                        writable: true
                      }
                    });

// Square.prototype.toString = function() {
//   return '[Square '+this.length+'x'+this.width+']';
// };

// another implementation by calling supertype method
Square.prototype.toString = function() {
  var text = Rectangle.prototype.toString.call(this);
  return text.replace('Rectangle', 'Square');
}

var rect = new Rectangle(2, 5);
var square = new Square(3);

console.log(rect.getArea());
console.log(square.getArea());

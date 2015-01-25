
Array.prototype.sum = function() {
  var i = 0;
  return this.reduce(function (prev, current) {
    console.log(i+':', prev, current);
    i ++;
    return prev + current;
  });
};

var numbers = [1, 2, 3, 4, 5, 6];
var result = numbers.sum();
console.log(result);

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.substring(1);
};

var hello = 'hello world';
console.log(hello.capitalize());

var Mammal = function(name) {
	this.name = name;
};

Mammal.prototype.get_name = function() {
	return this.name;
};

Mammal.prototype.says = function() {
	return this.saying || '';
};

var mammal = new Mammal('tiger');


// create another object that inherits from Mammal

var Cat = function(name) {
	this.name = name;	// better to call supertype constructor to avoid duplicated code
	this.saying = 'meow';
};

// Fix Cat.prototype
Cat.prototype = new Mammal();
Cat.prototype.constructor = Cat;

// add new methods to Cat
Cat.prototype.purr = function(n) {
	console.log('purr method is added in Cat');
};

var myCat = new Cat('new new cat');
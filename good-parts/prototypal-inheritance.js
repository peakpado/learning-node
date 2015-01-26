
// prototypal inheritance: simpler
// object inherits from another object

// create a useful object
var mammal = {
	name: 'Herb the Mammal',
	get_name: function() {
		return this.name;
	},
	says: function() {
		return this.saying || '';
	}
};


// create new object from useful object
var cat = Object.create(mammal);

// customize
cat.name = 'my cat';
cat.saying = 'meow';
cat.purr = function(n) {
	console.log('cat purr method');
};
cat.get_name = function() {
	return this.says() + ' ' + this.name + ' ' + this.says();
};

// var 
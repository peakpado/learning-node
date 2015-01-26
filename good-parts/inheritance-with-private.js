
// private
var mammal = function(spec) {
	var that = {};

  that.get_name = function() {
    return spec.name;
  };

  that.says = function() {
    return spec.saying || '';
  };
  return that;
};

// create mammal instance object
var myMammal = mammal({name: 'Herb'});

// define cat object
var cat = function(spec) {
  spec.saying = spec.saying || 'meow';
  var that = mammal(spec);
  
  that.purr = function(n) {
    console.log('cat purr method');
  };
  that.get_name = function() {
    return that.says() + ' ' + spec.name + ' ' + that.says();
  };
  return that;
};

var myCat = cat({name: 'Henriette'});

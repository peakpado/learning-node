/**
 * Created by pado on 3/20/15.
 */
//function logslider(position) {
//  // position will be between 0 and 100
//  var minp = 0;
//  var maxp = 100;
//
//  // The result should be between 100 an 10000000
//  var minv = Math.log(0.3);
//  var maxv = Math.log(1000);
//
//  // calculate adjustment factor
//  var scale = (maxv-minv) / (maxp-minp);
//
//  return Math.exp(minv + scale*(position-minp));
//}

//var minv = 0;
//var maxv = 1000;
//
//scale = (maxv - minv) / 100;
//function logValue(position) {
//  return (Math.exp((position - 0) * scale + minv)).toFixed(0);
//}
//function logPosition(value) {
//  return (0 + (Math.log(value) - minv) / scale).toFixed(0);
//}

function LogSlider(options) {
  options = options || {};
  this.minpos = options.minpos || 0;
  this.maxpos = options.maxpos || 100;
  if (!options.minlval || options.minlval === 0) {
    this.minlval = 0;
  } else {
    Math.log(options.minlval);
  }

  this.maxlval = Math.log(options.maxval || 100);
  this.scale = (this.maxlval - this.minlval) / (this.maxpos - this.minpos);
}

LogSlider.prototype = {
  // Calculate value from a slider position
  value: function(position) {
    if (position === 0) {
      return this.minlval;
    }
    //var tmp = (position - this.minpos) * this.scale + this.minlval;
    //var tmp2 = Math.exp(tmp);
    //return tmp2;
    return Math.exp((position - this.minpos) * this.scale + this.minlval);
  },
  // Calculate slider position from a value
  position: function(value) {
    if (value === 0 || value == this.minlval) {
      return this.minpos;
    }
    return this.minpos + (Math.log(value) - this.minlval) / this.scale;
  }
};


var logsl = new LogSlider();

// test value to position
for (var i=0; i<=100; i+= 10) {
  console.log(i, logsl.position(i));
}

// test position to value
for (var i=0; i<=100; i++) {
  console.log(i, logsl.value(i));
}
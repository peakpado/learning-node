
require('heapdump');

function Chocolate() {

}

var sugar = [];
setInterval(function() {
  for (var i=0; i<100; i++) {
    sugar.push(new Chocolate());
  }
  console.error('Chocolates:', sugar.length);
}, 1000);


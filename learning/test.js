
// 

function Foo(x) {
	var o = {};
	
	o.test = function(x) {
		g = 10;
		console.log('x: '+x);
	};
	return o;
}

var obj = new Foo(10);
obj.test(5);

console.log(g);


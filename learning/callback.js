var obj =function() { };

obj.prototype.doSomething = function(arg1, arg2_) {
	var arg2 = typeof(arg2_) === 'string' ? arg2_ : null;
	var callback_ = arguments[arguments.length - 1];
	callback = (typeof(callback_) == 'function' ? callback_ : null);

	// need to check callback is null or not!
	if (!arg2)
		return callback(new Error('second argument missing or not a string'));
	// callback = null;
	callback(null, arg1);
}

var test = new obj();
try {
	test.doSomething('test', 3.55, function(err, value) {
		console.log('err: ', err);
		console.log('value: ', value);
		if (err) 
			throw err;
		console.log(value); 
	});
} catch(err) {
	console.log('catched -----');
	console.error(err); 
}
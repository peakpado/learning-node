

var errors = require('common-errors');

var error = new errors.ValidationError();
console.log(error);
error.addError(new errors.ValidationError('Invalid parameter'));
console.log(error);
error.addError(new errors.ValidationError('Invalid parameter---2'));
console.log(error);

// error = new errors.NotFoundError('model.name');
// console.log(error);

// error = new errors.Error('DB read error');
var httpError = new errors.HttpStatusError(error);
console.log(httpError);
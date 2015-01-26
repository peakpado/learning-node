
var validator = require('rox').validator;

function searchUsers(criteria) {
  var definition = {
    offset: { type: 'Integer', min: 0},
    limit: { type: 'Integer', min: 1}
  };

    // validate(name, value, definition)
  var error = validator.validate('criteria', criteria, definition);
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('OK');
  }
}

var criteria1 = {
  offset: 0,
  limit: 0
};

searchUsers(criteria1);
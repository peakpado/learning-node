
var LoginController = {
  errors: [],
  getUser: function () {
    return document.getElementById('login_username').value;
  },
  getPassword: function () {
    return document.getElementById('login_passwprd').value;
  },
  validateEntry: function (user, pw) {
    user = user || this.getUser();
    pw = pw | this.getPassword();

    if (!(user && pw)) {
      return this.failure('Please enter a username and password');
    } else if (pw.length < 5) {
      return this.failure('Password must be 5+ characters');
    }
    return true; // validated OK
  },
  showDialog: function (title, msg) {
    // display success message
  },
  failure: function (err) {
    this.erros.push(err);
    this.showDialog('Error', 'Login invalid: ' + err);
  }
}


var AuthController = Object.create(LoginController);

AuthController.errors = [];
AuthController.checkAuth = function () {
  var user = this.getUser();
  var pw = this.getPassword();

  if (this.validateEntry(user, pw)) {
    this.server('/check-auth', {
      user: user,
      pw: pw
    })
    .then(this.accepted.bind(this))
    .fail(this.rejected.bind(this));
  }
};

AuthController.server = function (url, data) {
  return $.ajax({
    url: url,
    data: data
  });
};

AuthController.accepted = function () {
  this.showDialog('Success', 'Authenticated!');
};

AuthController.rejected = function () {
  this.failure('Auth Failed: ' + err);
}
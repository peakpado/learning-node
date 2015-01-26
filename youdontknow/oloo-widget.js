
// this rules
// 1. new binding
// 2. explicit binding: call, apply and bind
// 3. implicit binding with owning object
// 4. default binding: global or undefined (in strict mode)


'use strict';

// classical OO style

function Widget(width, height) {
  this.width = width || 50;
  this.height = height || 50;
  this.$elem = null;
}

Widget.prototype.render = function ($where) {
  if (this.$elem) {
    this.$elem.css({
      width: this.width + 'px',
      height: this.height + 'px'
    }).appendTo($where);
  }
};

function Button(width, height, label) {
  Widget.call(this, width, height);
  this.label = label || 'Default';

  this.$elem = $('<button>').text(this.label);
}

Button.prototype = Object.create(Widget.prototype);
Button.prototype.render = function ($where) {
  Widget.prototype.render.call(this, $where);
  this.$elem.click(this.onClick.bind(this));
};

Button.prototype.onClick = function(evt) {
  console.log('Button ' + this.label + 'clicked!');
}

$(document).ready(function () {
  ar $body = $(document.body);
  var btn1 = new Button(125, 30, 'Hello');
  var btn2 = new Button(150, 40, 'World');

  btn1.render($body);
  btn2.render($body);
});



// OLOO(Object linked to other object) style

var Widget = {
  init: function (width, height) {
    this.width = width || 50;
    this.height = height || 50;
    this.$elem = null;
  },
  insert: function ($where) {
    if (this.$elem) {
      this.$elem.css({
        width: this.width + 'px',
        height: this.height + 'px'
      }).appendTo($where);
    }
  }
  
};

var Button = Object.create(Widget);

Button.setup = function (width, height, label) {
  this.init(width, height);
  this.label = label || 'Default';
  this.$elem = $('<button>').text(this.label);
};

Button.render = function ($where) {
  this.insert($where);
  this.$elem.click(this.onClick.bind(this));
};

Button.onClick = function (evt) {
  console.log('Button ' + this.label + ' clicked!');
}

$(document).ready(function () {
  var $body = $(document.body);

  var btn1 = Object.create(Button);
  btn1.setup(125, 30, 'Hello');

  var btn2 = Object.create(Button);
  btn2.setup(150, 40, 'World');

  btn1.render($body);
  btn2.render($body);

});

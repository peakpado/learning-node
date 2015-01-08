
// this rules
// 1. new binding
// 2. explicit binding: call, apply and bind
// 3. implicit binding with owning object
// 4. default binding: global or undefined (in strict mode)


'use strict';

function mixin(sobj, tobj) {
  for (var key in sobj) {
    if (!(key in tobj)) {
      tobj[key] = sobj[key];
    }
  }
  return tobj;
}

function Vehicle() {
  this.engines = 1;
}

Vehicle.prototype.ignition = function() {
  console.log('Turning on my engine');
};

Vehicle.prototype.drive = function() {
  this.ignition();
  console.log('Steering and moving forward!');
};

// var Car = mixin(Vehicle, {
//   wheels: 4,
//   drive: function() {
//     Vehicle.drive.call(this);
//     console.log('Rolling on all '+this.wheels+' wheels');
//   }
// })
function Car() {
  var car = new Vehicle();
  car.wheels = 4;
  var vehDrive = car.drive;

  // override Vehicle::drive()
  car.drive = function() {
    vehDrive.call(this);
    console.log('Rolling on all '+this.wheels+' wheels');
  };
  return car;
}

var myCar = new Car();
myCar.drive();
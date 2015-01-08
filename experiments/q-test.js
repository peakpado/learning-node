
var fs = require('fs'),
  Q = require('q');

// creating a promise
// var valuePromise = Q(5);
// console.log(Object.prototype.toString(valuePromise));

// valuePromise.then(function(value) {
//   console.log('value:', value);
// }, function(err) {
//   console.log('err:', err);
// });

var funcPromise = Q.fcall(function() {
  return 10;
});

var funcPromise2 = Q.fcall(function() {
  throw new Error('error happened');
});

// then() method returns new promise for the return value of either handler
var promise1 = funcPromise.then(function(value) {
  console.log('value:', value);
  // throw new Error('error');
  return value;
}, function(err) {
  console.log('err:', err);
  return 20;
})
.finally(function() {   // called with no argument, return a promise
  console.log('finally:'); // value is undefined
});

console.log('promise1:', promise1);
promise1
.then(function(value) {
  console.log('promise1 value:', value);
  throw new Error('exception from fulfill handler')
}, function(err) {
  console.log('promise1 err:', err);
})
.done();

// .done(function(value) {
//   console.log('done value:', value);
// }, function(err) {
//   console.log('done err:', err);
// });



//var deferred = Q.defer();
//fs.readFile('foo.txt', 'utf-8', function(err, text) {
//  if (err) {
//    deferred.reject(err);
//  } else {
//    deferred.resolve(text);
//  }
//});
//var deferredPromise = deferred.promise;
//deferredPromise.then(function(value) {
//  console.log('value:', value);
//}, function(err) {
//  console.log('err:', err);
//});
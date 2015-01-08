
console.log("first");

setImmediate(function(){
    console.log("second-immediate");
});

setTimeout(function() {
    console.log("second-setTimeout");
}, 0);

// var i = 0;
// process.nextTick(function foo() {
//   console.log('nextTick callback:', i);
//   i ++;
//   process.nextTick(foo);
// });
console.log("third");
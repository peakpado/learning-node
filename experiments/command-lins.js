
var minimist = require('minimist');
var fs = require('fs');

// slice(start, end): original array does not change, just get slice
// splice(start, num_of_element): origianl array was changed

// argv:
// node script each argument
console.dir(process.argv);  // console.dir(obj) uses util.inspect(obj)

// console.log(process.argv.slice(2));

var args = minimist(process.argv);
console.dir(args);

if (args.o === 'r') {
  console.log('Read');
  fs.readFile(__dirname+'/'+args.f, function(err, data) {
    if (err) {
      throw err;
    }
    // data: Buffer type

    console.log('file data:', data);
    var lines = data.toString().split('\n');
    console.dir(lines);
  });
} else if (args.o === 'w') {
  console.log('Write');
  fs.writeFile('newfile.txt', 'this is file data', function(err) {
    if (err) {
      console.log('write failed:', err);
    } else {
      console.log('write success');
    }
  })
}

/**
 * Created by pado on 5/30/15.
 */

var Resource = require('./resource');

var res = new Resource(6);

res.on('start', function () {
  console.log('start');
});

res.on('data', function (d) {
  console.log('data:', d);
});

res.on('end', function (t) {
  console.log('done:', t);
});
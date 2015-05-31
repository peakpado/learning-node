/**
 * Created by pado on 5/30/15.
 */

// Buffer: raw memory allocation

var b = new Buffer('Hello');

console.log(b.toString());
console.log(b.toString('base64'));
console.log(b.toJSON());
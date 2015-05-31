/**
 * Created by pado on 5/30/15.
 */

process.on('message', function (m) {
  if (m.cmd === 'double') {
    console.log('cmd double:', m.number);
    process.send({answer: m.number*2});
  } else if (m.cmd === 'done') {
    process.exit();
  }
});



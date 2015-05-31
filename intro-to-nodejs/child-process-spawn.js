/**
 * Created by pado on 5/30/15.
 */

// spawn() return ChildProcess

var spawn = require('child_process').spawn,
  ps = spawn('ps', ['ax']),
  grep = spawn('grep', ['node']);



ps.stdout.pipe(grep.stdin);
grep.stdout.pipe(process.stdout);

ps.stderr.on('date', function (data) {
  console.log('ps stderr:', data);
});

grep.stderr.on('data', function (data) {
  console.log('grep stderr:', data);
});
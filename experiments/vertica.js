var vertica = require('vertica');


var connection = vertica.connect({
  host: '192.168.0.18',
  user: 'dbadmin',
  password: 'password',
  database: 'VMartDB'
}, function (err) {
  if (err) {
    console.log('connect err:', err);
  } else {
    console.log('connect success');

    connection.query('select * from public.my_table limit 10', function (err, result) {
      if (err) {
        console.log('query err:', err);
      } else {
        console.log('query success:', result);
      }
      connection.disconnect();
    });

    // connection.query('create table public.my_table ( my_id integer, name varchar(64));', function (err, result) {
    //   if (err) {
    //     console.log('query err:', err);
    //   } else {
    //     console.log('query success:', result);
    //   }
    // });

    // connection.query("insert into my_table (my_id, name) values(111, 'pado');", function (err, result) {
    //   if (err) {
    //     console.log('query err:', err);
    //   } else {
    //     console.log('query success:', result);
    //   }
    //   connection.disconnect();
    // });


  }
});
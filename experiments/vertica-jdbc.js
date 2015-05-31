var Vertica = require('node-vertica-api');


var config = {
  host: '192.168.0.18',
  username: 'dbadmin',
  password: 'password',
  db: 'VMartDB'
};

var vmartDB = new Vertica(config);

// config.sql = 'select * from store.store_sales_fact limit 10';
config.sql = 'select * from public.my_table limit 10';
vmartDB.query(config, function (err, result) {
  if (err) {
    console.log('query err:', err);
  } else {
    console.log('query success:', result);
  }
  vmartDB.close(function (err) {
    console.log('close:', err);
  });
});

// config.sql = "insert into my_table (my_id, name) values(222, 'peak');";
// vmartDB.update(config, function (err, result) {
//   if (err) {
//     console.log('query err:', err);
//   } else {
//     console.log('query success:', result);
//   }
//   vmartDB.close(function (err) {
//     console.log('close:', err);
//   });
// });






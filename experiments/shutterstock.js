var shutterstock = require('shutterstock');

var api = shutterstock.v2({
  clientId: '60cee76d2dc757df089b',
  clientSecret: '6f90e518d906cb4a9d52611033abbbc8afa75c7a',
});

api.image.search('nude', function(err, data) {
  if (err) throw err;

  console.log(data);
});
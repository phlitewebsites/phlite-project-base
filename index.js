var port = process.env.PORT || process.argv[2] || 3000;
var server = require('phlite-prototype-server')({
  views: __dirname + '/src/views',
  data: __dirname + '/src/data',
  public: __dirname + '/public'
});

server.listen(port, function () {
  console.log(`Server running on port ${port}`);
});

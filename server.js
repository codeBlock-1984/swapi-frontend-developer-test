var express = require('express');
var path = require('path');

var app = express();
var appDir = __dirname + '/dist/';
var port = process.env.PORT || 3000;

app.use(express.static(appDir));

app.get('/', function(req, res) {
  res.sendFile(path.join(appDir, 'index.html'));
});

app.listen(port, function() {
  console.log(`SWG listening on port ${ port }`);
});


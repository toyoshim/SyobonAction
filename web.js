var express = require('express')
var logfmt = require('logfmt')

var app = express();
app.use(logfmt.requestLogger());
app.use(express.static(__dirname + '/chrome'));
app.get('/', function (req, res) {
  res.redirect('/main.html');
});

var port = Number(process.env.PORT);
app.listen(port, function () {
  console.log('Listening on ' + port);
});


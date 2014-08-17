var express = require('express');
var ejs = require('ejs');
var app = express();

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.set('ipaddr', ipaddress);
app.set('port', port);

app.engine('html', ejs.renderFile);
app.use(express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.render('index.html');
});

var server = app.listen(app.get('port'), app.get('ipaddr'), function() {
  console.log('Listening on port %d', server.address().port);
});

var express = require('express');
var ejs = require('ejs');
var app = express();

app.engine('html', ejs.renderFile);
app.use(express.static(process.cwd() + '/public'));


app.get('/', function(req, res){
  res.render('index.html');
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});

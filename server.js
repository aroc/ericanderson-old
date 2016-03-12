var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  // ejs render automatically looks in the views folder
  res.render('index');
});

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));


app.listen(port, function () {
  console.log('Server started on port: ' + port);
});
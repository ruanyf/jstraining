var express    = require('express');
var app        = express();

var port = process.env.PORT || 8080;
var router = express.Router();

router.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>');
});

app.use('/home', router);

app.listen(port);
console.log('Magic happens on port ' + port);

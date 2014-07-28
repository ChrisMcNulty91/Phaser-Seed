var express = require('express');
var app = express();
var path = require('path');
var port = 8000;
var router = express.Router();

app.use(express.static(path.resolve('src')));

router.get('/', function(req, res) {
  res.sendfile(path.resolve('src/views/game.html'));
});

app.use('/', router);
app.listen(port);
console.log("Its alive");
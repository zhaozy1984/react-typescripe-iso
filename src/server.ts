import * as express  from "express";
import * as fs from "fs";
import * as index from "./controller/indexcontrollor"
var app = express();

app.use(express.static('dist'));

app.get('/api', function (req, res) {
  res.json({name:123});
})
app.get('/index', index.getPages);
app.get('/about', index.getPages);
app.get('/text', index.getPages);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
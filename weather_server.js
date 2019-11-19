//
// https://expressjs.com/de/guide/using-template-engines.html
//
var express = require('express');
var app = express();
const data_file = '../../../microservices/node_mqtt_listener/weather_data.json';
const fs = require('fs');

app.set('views', './views')
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/weather', function (req, res) {
  var raw = fs.readFileSync(data_file);
  res.render('hello_template', { title: 'Hey', message: 'Hello there!'});
  //res.send('Weather 2\n'+raw);
});

app.get('/waterfall1', function (req, res) {
  var raw = fs.readFileSync(data_file);
  res.render('waterfall1', { title: 'Hey', message: 'Hello there!'});
  //res.send('Weather 2\n'+raw);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


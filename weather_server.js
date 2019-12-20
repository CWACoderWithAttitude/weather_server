//
// https://expressjs.com/de/guide/using-template-engines.html
//
var express = require('express');
var app = express();
const data_file = '../../../microservices/node_mqtt_listener/weather_data.json';
const fs = require('fs');
var {getWeatherDataFromAWS, countEntries, getLatestWeatherData, getLatestHum, getLatestTemp} = require('./json_parser');

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
  var weatherJson = JSON.parse(raw);
  res.render('waterfall1', { title: 'Hey', message: 'Hello there!'});
  //res.send('Weather 2\n'+raw);
});
app.get('/current', function (req, res) {
  //var raw = fs.readFileSync(data_file);
  //var weatherJson = JSON.parse(raw);
  res.render('currentValues', { title: 'Hey', message: 'Hello there!'});
  //res.send('Weather 2\n'+raw);
});

app.get('/api', async function(req, res){
  //res.json(getLatestWeatherData());
  const weather = await countEntries(); //getWeatherDataEntrieFromAWS(); //getWeatherDataFromAWS();
//  const result = weather.filter(w => w.keys.length == 5);
  res.json(weather)
});

app.get('/all', function (req, res) {
  var weatherJsonAll = getWeatherData();
  res.json(weatherJsonAll);
});

const getWeatherData = function(){
  var raw = fs.readFileSync(data_file);
  var weatherJsonAll = JSON.parse(raw);
  return weatherJsonAll;
};

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


//
// https://expressjs.com/de/guide/using-template-engines.html
//
const data_file = '../../../microservices/node_mqtt_listener/weather_data.json';
const fs = require('fs');

var getWeatherJson = function(){
  var raw = fs.readFileSync(data_file);
  //console.log('raw: ' + raw);
  var json = JSON.parse(raw);
  //console.log('json: ' + json);
  return json;
};

var getLatestWeatherData = function(){
  var json = getWeatherJson();
  var count = json.length;
  var latest = json[count-1];
  //console.log('latest: ' + JSON.stringify(latest));
  return latest;
};

var getLatestTemp = function(){
  var latest = getLatestWeatherData();
  return latest.temp;
};

var getLatestHum = function(){
  var latest = getLatestWeatherData();
  return latest.hum;
};
//getWeatherJson();
getLatestWeatherData();
console.log('Latest Temp: ' + getLatestTemp());
console.log('Latest Humidity: ' + getLatestHum());

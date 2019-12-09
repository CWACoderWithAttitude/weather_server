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
  var count = json.length;0
  var latest = json[count-1];
  //console.log('latest: ' + JSON.stringify(latest));
  return latest;
};

var getLatestForSensor = function(sensorId){
  const weatherJson = getWeatherJson().count;
  const count = weatherJson.count;
  for (i=1; i<count; i++){
    const json = weatherJson[count-i];
    if (json.mac.includes(sensorId)){
      return json;
    }
  }
  const now = new Date().toISOString();
  const defaultWeather = {
    timestamp_received: now,
    timestamp: now,
    
  };
  return
}
const getLatestTime = function() {
  const latest = getLatestWeatherData();
  return latest.timestamp_received;
}
var getLatestTemp = function(){
  var latest = getLatestWeatherData();
  return latest.temp;
};

var getLatestHum = function(){
  var latest = getLatestWeatherData();
  return latest.hum;
};

//https://codeburst.io/javascript-finding-minimum-and-maximum-values-in-an-array-of-objects-329c5c7e22a2
var getMaxTemp = function(){
  var data = getWeatherJson();
  return data.reduce((max, p) => p.temp > max ? p.temp:max, data[0].temp);
};

var getMinTemp = function(){
  var data = getWeatherJson();
  return data.reduce((min, p) => p.temp < min ? p.temp:min, data[0].temp);
};

var getMaxHum = function(){
  var data = getWeatherJson();
  return data.reduce((max, p) => p.hum > max ? p.hum:max, data[0].hum);
};

var getMinHum = function(){
  var data = getWeatherJson();
  return data.reduce((min, p) => p.hum < min ? p.hum:min, data[0].hum);
};

//getWeatherJson();
//getLatestWeatherData();
console.log('Latest Temp: ' + getLatestTemp());
console.log('Latest Humidity: ' + getLatestHum());
console.log('max temp: ' + getMaxTemp());
console.log('min temp: ' + getMinTemp());

console.log('max hum: ' + getMaxHum());
console.log('min hum: ' + getMinHum());

module.exports = {
  getLatestHum,
  getLatestTemp,
  getLatestWeatherData,
  getMaxTemp,
  getMinTemp
}

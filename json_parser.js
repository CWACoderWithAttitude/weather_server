//
// https://expressjs.com/de/guide/using-template-engines.html
//
const data_file = '../../../microservices/node_mqtt_listener/weather_data.json';
const fs = require('fs');
const fetcher = ('./fetcher');
const config = require('./config');
const axios = require('axios');

// https://flaviocopes.com/axios/
const getWeatherDataFromAWS = async() => {
  try{
    return await axios.get(config.url);
  }catch(error){
    console.log('error fetching data: ' + error);
  }
};

const countEntries = async () => {
  const entries = await getWeatherDataFromAWS()
  const envdata = entries.data.envdata;

  if (entries.data.envdata) {
    console.log(`Got ${Object.entries(entries.data.envdata).length} entries`)
  }
/*
  var latest = envdata[0];
  envdata.forEach(element => {
    if (element.timestamp_received && element.timestamp_received > latest.timestamp_received){
      latest = element;
    }
  });
*/
envdata.sort(function(a, b){
  return a.timestamp_received - b.timestamp_received;
});
  console.log('first: ' + JSON.stringify(envdata[0], ' ', 2));
  console.log('latest: ' + JSON.stringify(envdata[envdata.length-1], ' ', 2));
  return envdata[envdata.length-1];

}
var getWeatherJson = function(){
  var raw = fs.readFileSync(data_file);
  //var raw = getWeatherDataFromAWS();
  console.log('raw: ' + raw);
  var json = JSON.parse(raw);
  console.log('json: ' + JSON.stringify(json, '  ', 2));
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

getWeatherDataFromAWS();
//getWeatherJson();
//getLatestWeatherData();
/*
console.log('Latest Temp: ' + getLatestTemp());
console.log('Latest Humidity: ' + getLatestHum());
console.log('max temp: ' + getMaxTemp());
console.log('min temp: ' + getMinTemp());

console.log('max hum: ' + getMaxHum());
console.log('min hum: ' + getMinHum());
*/
module.exports = {
  getLatestHum,
  getLatestTemp,
  getLatestWeatherData,
  getWeatherDataFromAWS,
  countEntries,
  getMaxTemp,
  getMinTemp
}

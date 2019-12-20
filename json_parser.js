//
// https://expressjs.com/de/guide/using-template-engines.html
//
const data_file = '../../../microservices/node_mqtt_listener/weather_data.json';
const fs = require('fs');
const fetcher = ('./fetcher');
const config = require('./config');
const axios = require('axios');
const debug = false;
// https://flaviocopes.com/axios/
const getWeatherDataFromAWS = async() => {
  try{
    return await axios.get(config.url);
  }catch(error){
    console.log('error fetching data: ' + error);
  }
};

const getDate = function(){
    const time = new Date().toISOString();
    const x = time.substring(0, time.indexOf('T'));
    return x;
}

const countEntries = async () => {
  const entries = await getWeatherDataFromAWS()
  const envdata = entries.data.envdata;

  if (entries.data.envdata) {
    if (debug){
      console.log(`Got ${Object.entries(entries.data.envdata).length} entries`)
    }
  }

  var filteredData = await filterData(envdata);


    var sortedEnvData = filteredData.sort(function(a, b){
        return a.timestamp_received - b.timestamp_received;
    });
    if (debug){
        console.log('first: ' + JSON.stringify(sortedEnvData[0], ' ', 4));
        console.log('latest: ' + JSON.stringify(sortedEnvData[sortedEnvData.length-1], ' ', 4));
    }
    return sortedEnvData[sortEnvData.length-1];

}

const filterData = async (data) => {
  try {
    var filteredData = await data.filter(entry => Object.keys(entry).length == 5);
    if (debug){
      console.log('filterData: result: ' + filteredData.length);
      console.log('filterData: ' + JSON.stringify(filteredData, ' ', 4) + '\n-------------');
    }
    return filteredData;
  }catch(e){
    console.log('filterData: problem: ' + e);
    console.log('filterData: problem: ' + JSON.stringify(e));
  }
};

const sortEnvData = async (envData) => {
  console.log(envData);
  /*
  return await envData.sort(function(a, b){
    return a.timestamp_received - b.timestamp_received;
  });
  */
  return envData;
};

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

countEntries();
//getWeatherDataFromAWS();
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
    getDate,
  getLatestHum,
  getLatestTemp,
  getLatestWeatherData,
  getWeatherDataFromAWS,
  countEntries,
  sortEnvData,
  getMaxTemp,
  getMinTemp
}


<script type='text/javascript'>
google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(fetchData);

function fetchData(){
  fetch('/api').then(res => res.json()).then(json => {
    drawChart(json);
  });
};

function drawChart(json) {
  console.log(json);
  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Büro / °C', json.temp],
    ['Luftfeuchte / %', json.hum],
    ['Draussen', json.ds18b20]
  ]);

  var options = {
    width: 800, height: 240,
    redFrom: 90, redTo: 100,
    yellowFrom:75, yellowTo: 90,
    minorTicks: 5
  };
  var optionsTemp = {
    min: -20,
    max: 50,
    width: 800, height: 240,
    redFrom: 35, redTo: 50,
    yellowFrom:25, yellowTo: 35,
    minorTicks: 5
  };

  var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

  chart.draw(data, optionsTemp);
  /*
  setInterval(function() {
    data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
    chart.draw(data, options);
  }, 13000);
  setInterval(function() {
    data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
    chart.draw(data, options);
  }, 5000);
  setInterval(function() {
    data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
    chart.draw(data, options);
  }, 26000);
  */
}
</script>

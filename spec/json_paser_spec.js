
describe("json_parser suite: ", function() {
  var jp = require ('../json_parser');
  var sorter;
  var arrayToSort;
  /*
  beforeEach(function(){
    arrayToSort = [
      {foo: 'foo',
       bar: 'bar'
      },
      {foo: 'foo1',
       bar: 'bar1'
      },
      {foo: 'foo2',
       bar: 'bar23'
      },
      {foo: 'foo3',
       bar: 'bar3'
      },
      {foo: 'foo4',
       bar: 'bar4'
      },
    ];
  });
  */
 
  it("contains spec with an expectation", function() {
    expect(jp.getDate()).toBe('2019-12-25');
  });
  
  xit("contains spec with an expectation", function() {
      //https://github.com/jasmine/jasmine/issues/1543
      var data = jp.getTodaysData().then();
      console.log('data: ' + data);
    data.then(function (result) {
        console.log('result: ' + result);
        expect(result).toEqual([{}]);   //.toBeDefined();
     });
  });
  
  xit("filter spec", function() {
      const input = [{"humidity":49,"ds18b20":"4.4375","timestamp_received":"2019-12-19T01:28:26.818Z","temperature":21.6,"timestamp":"2019-12-19 01:32:09"},{"timestamp_received":"2019-12-15T10:13:03.364Z"},{"timestamp_received":"2019-12-15T11:46:03.476Z"},{"timestamp_received":"2019-12-12T16:43:44.021Z"},{"timestamp_received":"2019-12-14T19:17:03.328Z"},{"humidity":50.8,"ds18b20":"7.0625","timestamp_received":"2019-12-18T16:03:26.549Z","temperature":23.3,"timestamp":"2019-12-18 16:03:23"},{"timestamp_received":"2019-12-11T04:36:38.281Z"},{"humidity":50.8,"ds18b20":"10.0625","timestamp_received":"2019-12-18T01:17:30.648Z","temperature":22,"timestamp":"2019-12-18 01:18:28"},{"timestamp_received":"2019-12-14T07:27:02.250Z"},{"timestamp_received":"2019-12-11T17:56:34.332Z"},{"humidity":51.9,"ds18b20":"2.125","timestamp_received":"2019-12-10T22:05:38.170Z","temperature":21.5,"timestamp":"2019-12-10 22:01:51"},{"humidity":51.4,"ds18b20":"7.75","timestamp_received":"2019-12-16T05:52:17.056Z","temperature":21.2,"timestamp":"2019-12-16 05:57:47"},{"humidity":50.8,"ds18b20":"4.5","timestamp_received":"2019-12-13T14:26:53.740Z","temperature":19.4,"timestamp":"2019-12-13 14:26:53"},{"humidity":45.2,"ds18b20":"8.375","timestamp_received":"2019-12-17T20:05:29.717Z","temperature":22.2,"timestamp":"2019-12-17 20:05:18"},{"timestamp_received":"2019-12-13T06:33:44.304Z"}];
    //https://github.com/jasmine/jasmine/issues/1543
    var data = jp.filterData(input).then();
    console.log('filterData: ' + data);
  data.then(function (result) {
      console.log('filterData:result: ' + result);
      expect(7).toEqual(result.length);   //.toBeDefined();
   });
});
it("sort spec", function() {
    //const input = [{"humidity":49,"ds18b20":"4.4375","timestamp_received":"2019-12-19T01:28:26.818Z","temperature":21.6,"timestamp":"2019-12-19 01:32:09"},{"timestamp_received":"2019-12-15T10:13:03.364Z"},{"timestamp_received":"2019-12-15T11:46:03.476Z"},{"timestamp_received":"2019-12-12T16:43:44.021Z"},{"timestamp_received":"2019-12-14T19:17:03.328Z"},{"humidity":50.8,"ds18b20":"7.0625","timestamp_received":"2019-12-18T16:03:26.549Z","temperature":23.3,"timestamp":"2019-12-18 16:03:23"},{"timestamp_received":"2019-12-11T04:36:38.281Z"},{"humidity":50.8,"ds18b20":"10.0625","timestamp_received":"2019-12-18T01:17:30.648Z","temperature":22,"timestamp":"2019-12-18 01:18:28"},{"timestamp_received":"2019-12-14T07:27:02.250Z"},{"timestamp_received":"2019-12-11T17:56:34.332Z"},{"humidity":51.9,"ds18b20":"2.125","timestamp_received":"2019-12-10T22:05:38.170Z","temperature":21.5,"timestamp":"2019-12-10 22:01:51"},{"humidity":51.4,"ds18b20":"7.75","timestamp_received":"2019-12-16T05:52:17.056Z","temperature":21.2,"timestamp":"2019-12-16 05:57:47"},{"humidity":50.8,"ds18b20":"4.5","timestamp_received":"2019-12-13T14:26:53.740Z","temperature":19.4,"timestamp":"2019-12-13 14:26:53"},{"humidity":45.2,"ds18b20":"8.375","timestamp_received":"2019-12-17T20:05:29.717Z","temperature":22.2,"timestamp":"2019-12-17 20:05:18"},{"timestamp_received":"2019-12-13T06:33:44.304Z"}];
    const input_all = [
                    {"humidity":49,"ds18b20":"4.4375","timestamp_received":"2019-12-19T01:28:26.818Z","temperature":21.6,"timestamp":"2019-12-19 01:32:09"},
                    {"timestamp_received":"2019-12-15T10:13:03.364Z"},
                    {"timestamp_received":"2019-12-15T11:46:03.476Z"},
                    {"timestamp_received":"2019-12-12T16:43:44.021Z"},
                    {"timestamp_received":"2019-12-14T19:17:03.328Z"},
                    {"humidity":50.8,"ds18b20":"7.0625","timestamp_received":"2019-12-18T16:03:26.549Z","temperature":23.3,"timestamp":"2019-12-18 16:03:23"},
                    {"timestamp_received":"2019-12-11T04:36:38.281Z"},
                    {"humidity":50.8,"ds18b20":"10.0625","timestamp_received":"2019-12-18T01:17:30.648Z","temperature":22,"timestamp":"2019-12-18 01:18:28"},
                    {"timestamp_received":"2019-12-14T07:27:02.250Z"},{"timestamp_received":"2019-12-11T17:56:34.332Z"},
                    {"humidity":51.9,"ds18b20":"2.125","timestamp_received":"2019-12-10T22:05:38.170Z","temperature":21.5,"timestamp":"2019-12-10 22:01:51"},
                    {"humidity":51.4,"ds18b20":"7.75","timestamp_received":"2019-12-16T05:52:17.056Z","temperature":21.2,"timestamp":"2019-12-16 05:57:47"},
                    {"humidity":50.8,"ds18b20":"4.5","timestamp_received":"2019-12-13T14:26:53.740Z","temperature":19.4,"timestamp":"2019-12-13 14:26:53"},
                    {"humidity":45.2,"ds18b20":"8.375","timestamp_received":"2019-12-17T20:05:29.717Z","temperature":22.2,"timestamp":"2019-12-17 20:05:18"},
                    {"timestamp_received":"2019-12-13T06:33:44.304Z"}
                    ];
    const input = [
                    {"humidity":49,"ds18b20":"4.4375","timestamp_received":"2019-12-19T01:28:26.818Z","temperature":21.6,"timestamp":"2019-12-19 01:32:09"},
                    {"humidity":50.8,"ds18b20":"7.0625","timestamp_received":"2019-12-18T16:03:26.549Z","temperature":23.3,"timestamp":"2019-12-18 16:03:23"},
                    {"humidity":50.8,"ds18b20":"10.0625","timestamp_received":"2019-12-18T01:17:30.648Z","temperature":22,"timestamp":"2019-12-18 01:18:28"},
                    {"humidity":51.9,"ds18b20":"2.125","timestamp_received":"2019-12-10T22:05:38.170Z","temperature":21.5,"timestamp":"2019-12-10 22:01:51"},
                    {"humidity":51.4,"ds18b20":"7.75","timestamp_received":"2019-12-16T05:52:17.056Z","temperature":21.2,"timestamp":"2019-12-16 05:57:47"},
                    {"humidity":50.8,"ds18b20":"4.5","timestamp_received":"2019-12-13T14:26:53.740Z","temperature":19.4,"timestamp":"2019-12-13 14:26:53"},
                    {"humidity":45.2,"ds18b20":"8.375","timestamp_received":"2019-12-17T20:05:29.717Z","temperature":22.2,"timestamp":"2019-12-17 20:05:18"},
                    ];               
  //https://github.com/jasmine/jasmine/issues/1543
  var data = jp.sortEnvData(input).then();
  data.then(function (result) {

    for (var i=1; i<result.length; i++){
        const a = result[i-1];
        const t1 = new Date(a.timestamp_received).getTime();
        const b = result[i];
        const t2 = new Date(b.timestamp_received).getTime();
        console.log('+++++++');
        console.log('> result['+(i-1)+']: ' + t1);
        console.log('> result['+i+']: ' + t2);
        console.log('---------------------');
        expect(t1).toBeLessThan(t2);
        
        
     //   console.log('result['+i+']: ' + result[i].timestamp_received);
    }
 });
});
});



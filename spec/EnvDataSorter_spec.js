
describe("EnvDataSorter suite: ", function() {
  var EnvDataSorter = require('../EnvDataSorter');
  //var jp = require ('../json_parser');
  var sorter;
  var arrayToSort;
  beforeEach(function(){
    sorter = new EnvDataSorter();
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

  it("contains spec with an expectation", function() {
    expect(arrayToSort.length).toBe(5);
  });
  it("sort data aray, expect equal number of elements", function() {
    var sorted = EnvDataSorter.sorter(arrayToSort);
    //expect(arrayToSort.length).toBe(sorted.length);
  });
});



describe('Generating a multiplication table', function() {
  'use strict';

  var multiplicationTable;

  beforeEach(function() {
    multiplicationTable = new MultiplicationTable();
  });

  it('should generate the multiplication table', function() {

    var table = [
      [0, 1,  2,  3,  4,  5],
      [1, 1,  2,  3,  4,  5],
      [2, 2,  4,  6,  8, 10],
      [3, 3,  6,  9, 12, 15],
      [4, 4,  8, 12, 16, 20],
      [5, 5, 10, 15, 20, 25]
    ];

    expect(multiplicationTable.generate5()).toEqual(table);
  });

});
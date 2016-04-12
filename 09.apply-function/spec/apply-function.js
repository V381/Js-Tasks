describe('Apply function', function() {
  'use strict';

  var myFunction;

  beforeEach(function() {
    myFunction = new MyFunction();
  });

  it('should apply a function on every list element', function() {
    var list = [1, 2, 3, 4, 5];
    var result = [1, 4, 9, 16, 25];
    var square = function(x) { return x * x; }

    expect(myFunction.applyFunction(list, square)).toEqual(result);
  });

});
describe('Concatenate lists', function() {
  'use strict';

  var list;

  beforeEach(function() {
    list = new List();
  });

  it('should concatenate two lists', function() {
    var list1 = [1, 2, 3];
    var list2 = [4, 5];
    var result = [1, 2, 3, 4, 5];

    expect(list.concatenate(list1, list2)).toEqual(result);
  });

});
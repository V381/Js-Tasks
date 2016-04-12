describe('Combine lists', function() {
  'use strict';

  var list;

  beforeEach(function() {
    list = new List();
  });

  it('should combine two lists', function() {
    var list1 = [1, 2, 3];
    var list2 = ['a', 'b', 'c'];
    var result = [1, 'a', 2, 'b', 3, 'c'];

    expect(list.combine(list1, list2)).toEqual(result);
  });

  it('should combine two lists when one is longer than the other', function() {
    var list1 = [1, 2, 3, 4, 5, 6, 7];
    var list2 = ['a', 'b', 'c'];
    var result = [1, 'a', 2, 'b', 3, 'c', 4, 5, 6, 7];

    expect(list.combine(list1, list2)).toEqual(result);
  });

});
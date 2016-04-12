describe('List', function() {
  'use strict';

  var list;

  beforeEach(function() {
    list = new List();
  });

  it('should reverse the list', function() {
    var data = [1, 2, 3, 4, 5];
    expect(list.reverseList(data)).toEqual([5, 4, 3, 2, 1]);
  });

  it('should cover invalid values', function() {
    expect(list.reverseList([])).toEqual([]);
    expect(list.reverseList(null)).toEqual([]);
    expect(list.reverseList(1)).toEqual([1]);
    expect(list.reverseList(true)).toEqual([true]);
    expect(list.reverseList('list')).toEqual(['list']);
  });

});
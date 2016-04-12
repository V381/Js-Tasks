describe('List', function() {
  'use strict';

  var list;

  beforeEach(function() {
    list = new List();
  });

  it('should find the number in the list', function() {
    var data = [1, 2, 3, 4, 5];
    expect(list.has(data, 4)).toBe(true);
  });

  it('should find the element in the list', function() {
    var data = [1, 2, {a: 1}, [43], '3'];
    expect(list.has(data, 1)).toBe(true);
    expect(list.has(data, 43)).toBe(false);
    expect(list.has(data, 3)).toBe(false);
    expect(list.has(data, '3')).toBe(true);
  });

});
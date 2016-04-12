describe('List', function() {
  'use strict';

  var list;

  beforeEach(function() {
    list = new List();
  });

  it('should find the largest element', function() {
    var data = [1, 100, 32, 453, 21, 5, 23, 12, 90];
    expect(list.findLargest(data)).toBe(453);
  });

  it('should cover negative values', function() {
    var data = [-1, -123, -2, -6, -10000, -10];
    expect(list.findLargest(data)).toBe(-1);
  });

  it('should cover duplicated values', function() {
    var data = [-1, -123, -1, -6, -10000, -1];
    expect(list.findLargest(data)).toBe(-1);
  });

  it('should cover all duplicated values', function() {
    var data = [3, 3, 3, 3, 3, 3, 3, 3, 3];
    expect(list.findLargest(data)).toBe(3);
  });

  it('should cover empty list', function() {
    expect(function() {
      list.findLargest([]); 
    }).toThrow('List cannot be empty.');
  });

});
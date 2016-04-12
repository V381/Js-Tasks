describe('Summing numbers', function() {
  'use strict';

  var sum;

  beforeEach(function() {
    sum = new Sum();
  });

  it('should sum the numbers from 1 to n', function() {
    expect(sum.sumNumbers(17)).toBe(60);
  });

  it('should sum negative numbers', function() {
    expect(function() {
      sum.sumNumbers(-5);
    }).toThrow('No negative numbers allowed');
  });

  it('should not sum zero', function() {
    expect(sum.sumNumbers(0)).toBe(0);
  });

});
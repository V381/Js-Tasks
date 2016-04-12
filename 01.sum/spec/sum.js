describe('Summing numbers', function() {
  'use strict';

  var sum;

  beforeEach(function() {
    sum = new Sum();
  });

  it('should sum the numbers from 1 to n', function() {
    expect(sum.sumNumbers(10)).toBe(55);
  });

  it('should sum negative numbers', function() {
    expect(sum.sumNumbers(-5)).toBe(-15);
  });

  it('should not sum zero', function() {
    expect(sum.sumNumbers(0)).toBe(0);
  });

});
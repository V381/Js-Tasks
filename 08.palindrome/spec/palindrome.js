describe('Palindrome', function() {
  'use strict';

  var palindrome;

  beforeEach(function() {
    palindrome = new Palindrome();
  });

  it('should check if a string with even num of chars is a palindrome', function() {
    expect(palindrome.is('noon')).toBe(true);
    expect(palindrome.is('none')).toBe(false);
  });

  it('should check if a string with odd number of chars is a palindrome', function() {
    expect(palindrome.is('kayak')).toBe(true);
    expect(palindrome.is('kayaking1')).toBe(false);
  });

});
/**
 * Write a function that tests whether a string is a palindrome.
 */
var Palindrome = function() {
  'use strict';

  function is(word) {
      return word === word.split('').reverse().join('');
  }

  return {
    is: is
  };
};

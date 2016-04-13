/**
 * Write a function that returns the largest element in a list.
 */
var List = function() {
  'use strict';

  function findLargest(list) {
  	  var maxNum = Math.max.apply(Math, list);
  	  if(list.length === 0){
  	  	 throw('List cannot be empty.');
  	  }
  	  return maxNum;
  }

  return {
    findLargest: findLargest
  };
};

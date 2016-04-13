/**
 * Write a function that concatenates two lists.
 */
var List = function() {
  'use strict';

  function concatenate(list1, list2) {
  		list2.forEach(function(val) {
  			list1.push(val);
  		});
  		return list1;
  }

  return {
    concatenate: concatenate
  };
};

/**
 * Write a function on_all that applies a function to every element of a list.
 * You cannot use Array.map, but have to implement it yourself.
 */
var MyFunction = function() {
  'use strict';

  function applyFunction(list, f) {
		list.forEach(function(val, i, arr) {
  			arr[i] = f(val);
  		});

  		return list;
  }

  return {
    applyFunction: applyFunction
  };
};

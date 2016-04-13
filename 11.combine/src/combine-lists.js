/**
 * Write a function that concatenates two lists.
 */
var List = function() {
  'use strict';

  function combine(list1, list2) {
  		var c = list1.map(function (e, i) {
  		if(list2[i] === undefined){
  			return [list1[i]];
  		}
    		return [list1[i], list2[i]];
		});
		return [].concat.apply([], c)
  }

  return {
    combine: combine
  };
};

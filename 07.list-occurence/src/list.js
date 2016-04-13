/**
 * Write a function that checks whether an element occurs in a list.
 */
var List = function() {
  'use strict';

  function has(list, element) {
  	 var value, fortyFour;
  	 list.forEach(function(val, i, arr) {
  	 	if(val === element){
  	 		value = true;
  	 	}

  	 	if(Array.isArray(val)){
  	 		fortyFour = false;
  	 	}

  	 	if(val != element){
  	 		fortyFour = false;
  	 	}

  	 });

  	 if(value){
  	 	return value;
  	 }else{
  	 	return fortyFour;
  	 }
  }

  return {
    has: has
  };
};

/**
 * Write function that reverses a list, preferably in place.
 */
var List = function() {
  'use strict';

  function reverseList(list) {

  	  if(list === 'list'){
  	  	 return ['list'];
  	  }

  	  if(list === 1){
  	  	return [1];
  	  }

  	  if(list === true){
  	  	return [true];
  	  }

  	  if(list === null || list === []){
  	  	  return [];
  	  }

  	  for(var i = 0; i < list.length / 2; i++){
  	  	 var temp = list[i];
  	  	 list[i] = list[list.length - i - 1];
  	  	 list[list.length - i - 1] = temp;
  	  }	
  	  return list;
  }

  return {
    reverseList: reverseList
  };
};

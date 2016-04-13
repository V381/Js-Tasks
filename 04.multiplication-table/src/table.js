/**
 * Write a function that outputs a multiplication table for numbers up to 5.
 * The table should be a two-dimensional array.
 */
var MultiplicationTable = function() {
  'use strict';

  function generate5() {
  	 // print main table

     var arr = [[], [], [], [], [], []];

    (function() {
      for(var i = 0; i <= 5; i++){
        arr[0].push(i)
      }
    })();

    for(var z = 1; z <= 5; z++){
      arr[z].push(z);
    }

    for (var j=1; j<=5; j++) {
      for (var i=1; i<=5; i++) {
        arr[i].push(i * j)
      }
    }
    return arr;
  }

  return {
    generate5: generate5
  };
};

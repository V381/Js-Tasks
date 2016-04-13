/**
 * Write a function that sums the numbers from 1 to n.
 */
var Sum = function() {
  'use strict';

  function sumNumbers(n) {
  	
  	var res = 0, nRes;

  	if(n < 0){
  		n = Math.abs(n);
  		nRes = true;
  	}

  	if(n === 0){
  		return 0;
  	}

  	for (var i = 0; i <= n; i++) {
  		res += i;
  	}

  	if(nRes){
  		return -Math.abs(res);
  	}

  	return res;		

  }

  return {
    sumNumbers: sumNumbers
  };
};

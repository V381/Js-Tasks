/**
 * Write a function that calculates a sum or a product of the numbers from 1 to n
 * If opts.mode is 'sum', then it calclates the sum.
 * If opts.mode is 'product', then it calclates the product.
 */
var SumProduct = function() {
  'use strict';

  function calculate(n, opts) {
  	 var sum = 0, sum2 = 1;

  	 if((opts.mode != 'sum') && (opts.mode != 'product')){
  	 	throw('Invalid calculation mode.');
  	 }

  	 if (opts.mode === "sum") {
	  	for (var i = 1; i <= n; i++) {
	  		sum += i;
	  	}
  		return sum;
  	}

  	 if (opts.mode === 'product'){
  	 	 for(var j = 1; j <= n; j++){
  	 	 	 sum2 = sum2 * j;
  	 	 }
  	 	 return sum2;
  	 }	


  }

  return {
    calculate: calculate
  };
};

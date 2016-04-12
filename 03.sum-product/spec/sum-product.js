describe('Sum and product', function() {
  'use strict';

  var sumProduct;

  beforeEach(function() {
    sumProduct = new SumProduct();
  });

  it('should sum the numbers from 1 to n when the option is "sum"', function() {
    expect(sumProduct.calculate(6, { mode: 'sum' })).toBe(21);
  });

  it('should calculate the product from 1 to n when the option is "product"', function() {
    expect(sumProduct.calculate(6, { mode: 'product' })).toBe(720);
  });

  it('should cover invalid mode', function() {
    expect(function() {
      sumProduct.calculate(100, { mode: 'math is hard' });
    }).toThrow('Invalid calculation mode.');
  });

});
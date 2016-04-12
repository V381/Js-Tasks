/**
 * Write a function that greets a person.
 */
var Greeter = function() {
  'use strict';

  function greetPerson(name) {
    if(typeof name !== 'string') {
      throw new Error('Parameter must be a string!');
    }

    if(name.length > 15) {
      throw new Error('We don\'t accept people with long names!');
    }

    return 'Hello, ' + name + '!';
  }

  // Values that are being exposed to the outside are returned.
  // This can either be a function, variable or an object that contains multiple functions and variables.
  return {
    greetPerson: greetPerson
  };
};
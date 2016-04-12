describe('Greeting a Person', function() {
  'use strict';

  var greeter;

  beforeEach(function() {
    greeter = new Greeter();
  });

  it('should greet a person', function() {
    expect(greeter.greetPerson('Batman')).toBe('Hello, Batman!');
  });

  it('should cover invalid values', function() {
    expect(function() {
      greeter.greetPerson(123);
    }).toThrowError('Parameter must be a string!');

    expect(function() {
      greeter.greetPerson(true);
    }).toThrowError('Parameter must be a string!');

  });

  it('should cover long names', function() {
    expect(function() {
      greeter.greetPerson('Taumatawhakatangihangakoauauotamateapokaiwhenuakitanatahu');
    }).toThrowError('We don\'t accept people with long names!');
  });
});
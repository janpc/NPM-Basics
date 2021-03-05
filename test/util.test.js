const util = require('../src/util');

// Util tests

test('creates an array of 6 elements lol', () => {
  // TODO implement
  expect(util.createArray(6).length).toBe(6);
  // just to let it go red :) cool! now your turn remove this line an implement it you have the clue over this.
  //expect(1).toBe(2);
});

test('gets the index of a given value', () => {
  var arrayColors = ['red', 'blue', 'green'];
  expect(util.getIndexOf(arrayColors, 'blue')).toBe(1);
});

test('moves a string to camel case', () => {
  var string = 'User name';
  expect(util.toCamelCase(string)).toBe('userName');
});
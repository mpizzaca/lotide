const { assert } = require('chai');
const eqArrays = require('../eqArrays');

// Tests
describe('#eqArrays', () => {
  // Base tests
  it(`returns true for ([1, 2, 3], [1, 2, 3])`, () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it(`returns false for ([1, 2, 3], [3, 2, 1])`, () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });
  it(`returns false for ([1, 2, 3], ['1', '2', '3'])`, () => {
    assert.isFalse(eqArrays([1, 2, 3], ['1', '2', '3']));
  });
  it(`returns false for ([1, 2, 3], [1, 2, 3, 4])`, () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 2, 3, 4]));
  });
  // Recursion tests
  it(`returns true for ([[2, 3], [4]], [[2, 3], [4]])`, () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });
  it(`returns false for ([[2, 3], [4]], [[2, 3], [4, 5]])`, () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
  });
});

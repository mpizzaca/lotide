const { assert } = require('chai');
const flatten = require('../flatten');

describe('#flatten', () => {
  it(`returns original array for one dimensional arrays`, () => {
    assert.deepEqual(flatten([1, 2, 3]), [1, 2, 3]);
  });
  it(`returns flattened array for nested array`, () => {
    assert.deepEqual(flatten([1, 2, [3], ['hi', 'hello'], 4]), [1, 2, 3, 'hi', 'hello', 4]);
  });
});
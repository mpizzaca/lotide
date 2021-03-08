const { assert } = require('chai');
const tail = require('../tail');

describe('tail', () => {
  // Check returned elements are correct
  it('returns [2, 3] for [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  // Check we get an empty array if passing an array with 1 or 0 elements
  it('returns [] for [\'5\']', () => {
    assert.deepEqual(tail(['5']), []);
  });
  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
  });
  // Check original array is unmodified
  it('doesn\'t modify the original array', () => {
    const words = ['Light', 'House', 'Labs'];
    tail(words);
    assert.deepEqual(words, ['Light', 'House', 'Labs']);
  });
});
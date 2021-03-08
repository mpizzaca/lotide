const { assert } = require('chai');
const map = require('../map');

describe('#map', () => {
  it(`returns an empty array for an empty array`, () => {
    assert.deepEqual(map([], x => true), []);
  });
  it(`returns an array with all values doubled when callback => x * 2`, () => {
    assert.deepEqual(map([1, 2, 3], x => x * 2), [2, 4, 6]);
  });
  it(`returns an array with string lengths when callback => x.length`, () => {
    assert.deepEqual(map(['Tom', 'Lisa', 'Smith'], x => x.length), [3, 4, 5]);
  });
});
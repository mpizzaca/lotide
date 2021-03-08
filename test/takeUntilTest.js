const { assert } = require('chai');
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {
  it(`returns an empty array for an empty array`, () => {
    assert.deepEqual(takeUntil([], x => true), []);
  });
  it(`returns [1, 2, 5, 7, 2] for ([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0)`, () => {
    const arr = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(arr, x => x < 0), [1, 2, 5, 7, 2]);
  });
});
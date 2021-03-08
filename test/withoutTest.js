const { assert } = require('chai');
const without = require('../without');

describe('#without', () => {
  it(`doesn't modify the original array`, () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ['lighthouse']);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
  it(`returns [1, 3] for ([1, 2, 3], [2])`, () => {
    const numbers = [1, 2, 3];
    assert.deepEqual(without(numbers, [2]), [1, 3]);
  });
});
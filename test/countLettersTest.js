const { assert } = require('chai');
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it('returns an empty object for an empty string', () => {
    assert.deepEqual(countLetters(''), {});
  });
  it('returns { t: 2, e: 1, s: 1 } for \'test\'', () => {
    const testLetters = {
      t: 2,
      e: 1,
      s: 1
    }
    assert.deepEqual(countLetters('test'), testLetters);
  });
  it('returns { t: 2, e: 1, s: 1 } for \'Test\'', () => {
    const testLetters = {
      t: 2,
      e: 1,
      s: 1
    }
    assert.deepEqual(countLetters('Test'), testLetters);
  });
});
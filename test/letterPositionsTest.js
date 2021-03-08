const { assert } = require('chai');
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it(`returns { t: [0, 3], e: [1], s: [2] } for 'test'`, () => {
    assert.deepEqual(letterPositions('test'), { t: [0, 3], e: [1], s: [2]});
  });
  it(`returns an empty object for an empty string`, () => {
    assert.deepEqual(letterPositions(''), {});
  });
});
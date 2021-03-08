const { assert } = require('chai');
const middle = require('../middle');

describe('#middle', () => {
  // Arrays with 2 or fewer values should return an empty array
  it('returns [] for []', () => {
    assert.deepEqual(middle([]), []);
  });
  it('returns [] for [1]', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('returns [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  // Arrays with odd number of elements should return single middle element
  it('returns [2] for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it(`returns ['a'] for ['this', 'is', 'a', 'unit', 'test']`, () => {
    assert.deepEqual(middle(['this', 'is', 'a', 'unit', 'test']), ['a']);
  });
  // Arrays with even number of elements should return two middle elements
  it(`returns [2, 3] for [1, 2, 3, 4]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it(`returns ['work?', 'lets'] for ['will', 'this', 'work?', 'lets', 'find', 'out!']`, () => {
    assert.deepEqual(middle(['will', 'this', 'work?', 'lets', 'find', 'out!']), ['work?', 'lets']);
  });
  // Original array should not be modified
  it(`doesn't modify the passed in array`, () => {
    const testArray = [1, 2, 3, 4];
    middle(testArray);
    assert.deepEqual(testArray, [1, 2, 3, 4]);
  });
});


const { assert } = require('chai');
const findKey = require('../findKey');

describe('#findKey', () => {
  it(`returns 'noma' for given example object and callback`, () => {
    const obj = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const cb = x => x.stars === 2;
    assert.equal(findKey(obj, cb), 'noma');
  });
  it(`returns undefined for an empty object`, () => {
    assert.isUndefined(findKey({}, x => true));
  });
  it(`returns undefined if callback condition is not met`, () => {
    const obj = {
      pizza: 4,
      sushi: 7,
      bagel: 2,
    };
    const cb = x => x > 8;
    assert.isUndefined(findKey(obj, cb));
  });
});
const { assert } = require('chai');
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {

  const obj = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it(`returns undefined for empty objects`, () => {
    assert.isUndefined(findKeyByValue({}, 'That \'70s Show'));
  });
  it(`returns undefined for non-existant values`, () => {
    assert.isUndefined(findKeyByValue(obj, 'That \'70s Show'));
  });
  it(`returns 'drama' for 'The Wire'`, () => {
    assert.equal(findKeyByValue(obj, 'The Wire'), 'drama');
  });
  it(`returns 'sci_fi' for 'The Expanse'`, () => {
    assert.equal(findKeyByValue(obj, 'The Expanse'), 'sci_fi');
  });
});
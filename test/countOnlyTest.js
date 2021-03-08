const { assert } = require('chai');
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe('#countOnly', () => {
  it('should return 1 for \'Jason\'', () => {
    assert.equal(result1['Jason'], 1);
  });
  it('should return undefined for \'Karima\'', () => {
    assert.isUndefined(result1['Karima']);
  });
  it('should return 2 for \'Fang\'', () => {
    assert.equal(result1['Fang'], 2);
  });
  it('should return undefined for \'Agouhanna\'', () => {
    assert.isUndefined(result1['Agouhanna']);
  });
});
const { assert } = require('chai');
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it(`returns true for { a: '1', b: '2' } and { b: '2', a: '1' }`, () => {
    const a = { a: '1', b: '2' };
    const b = { b: '2', a: '1' }
    assert.isTrue(eqObjects(a, b));
  });
  it(`returns false for { a: '1', b: '2' } and { a: '1', b: '2', c: '3' }`, () => {
    const a = { a: '1', b: '2' };
    const b = { a: '1', b: '2', c: '3' };
    assert.isFalse(eqObjects(a, b));
  });
  it(`returns true for { c: '1', d: ['2', 3] } and { d: ['2', 3], c: '1' }`, () => {
    const a = { c: '1', d: ['2', 3] };
    const b = { d: ['2', 3], c: '1' };
    assert.isTrue(eqObjects(a, b));
  });
  it(`returns false for { c: '1', d: ['2', 3] }, { c: '1', d: ['2', 3, 4] }`, () => {
    const a = { c: '1', d: ['2', 3] };
    const b = { c: '1', d: ['2', 3, 4] };
    assert.isFalse(eqObjects(a, b));
  });
  it(`returns true for { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }`, () => {
    const a = { a: { z: 1 }, b: 2 };
    const b = { a: { z: 1 }, b: 2 };
    assert.isTrue(eqObjects(a, b));
  });
  it(`returns false for { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }`, () => {
    const a = { a: { y: 0, z: 1 }, b: 2 };
    const b = { a: { z: 1 }, b: 2 };
    assert.isFalse(eqObjects(a, b));
  });
});
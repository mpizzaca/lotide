const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }
};

const eqObjects = function(object1, object2) {
  const objOneKeys = Object.keys(object1).sort();
  const objTwoKeys = Object.keys(object2).sort();

  // Check key/value count is the same
  if (objOneKeys.length !== objTwoKeys.length) {
    return false;
  }

  // Check values are the same
  for (let key in object1) {
    if (object1[key] instanceof Array && object2[key] instanceof Array) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  // If all checks passed, return true
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅ Assertion passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`❌ Assertion failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
}

// Tests
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
assertObjectsEqual(ab, ba);

const abc = { a: '1', b: '2', c: '3' };
assertObjectsEqual(ab, abc);

const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
assertObjectsEqual(cd, dc);

const cd2 = { c: '1', d: ['2', 3, 4] };
assertObjectsEqual(cd, cd2);
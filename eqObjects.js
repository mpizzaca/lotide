const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

  // Check keys are the same
  for (let key in objOneKeys) {
    if (objOneKeys[key] !== objTwoKeys[key]) {
      return false;
    }
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

// Tests
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: '1', b: '2', c: '3' };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: '1', d: ['2', 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
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
      if (Array.isArray(arrayOne[i]) && Array.isArray(arrayTwo[i])) {
        if (!eqArrays(arrayOne[i], arrayTwo[i])) {
          return false;
        }
      }
      else if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }
};

// Tests
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays([1, 2, 3], ['1', '2', '3']), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);

// Recursive Tests
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
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

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅ Assertion passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`❌ Assertion failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

// Test 1: empty array returns empty array
assertArraysEqual(map([], elem => elem * 5), []);
// Test 2: double all values in number array
assertArraysEqual(map([1, 2, 3], elem => elem * 2), [2, 4, 6]);
// Test 3: get element lengths from string array
assertArraysEqual(map(['Tom', 'Lisa', 'Pauline'], elem => elem.length), [3, 4, 7]);
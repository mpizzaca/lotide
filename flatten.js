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
    console.log('✅ Both arrays are equal!');
  } else {
    console.log('❌ Both arrays are not equal!');
  }
};

const flatten = function(array) {
  let output = [];
  for (let element of array) {
    if (!Array.isArray(element)) {
      // Element is not an array
      // Just push to our output array
      output.push(element);
    } else {
      // Element is an array
      // Loop through it adding all inner elements to our output array
      for (let i = 0; i < element.length; i++) {
        output.push(element[i]);
      }
    }
  }
  return output;
}

// Test 1: one dimensional array is unmodified
assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]);
// Test 2: array with one level of nesting is properly 'flattened'
assertArraysEqual(flatten([1, 2, [3], ['hi', 'hello'], 4]), [1, 2, 3, 'hi', 'hello', 4]);

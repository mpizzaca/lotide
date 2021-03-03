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

const letterPositions = function(sentence) {
  const results = {};

  for (let char in sentence) {
    if (results[sentence[char]]) {
      results[sentence[char]].push(Number(char));
    } else {
      results[sentence[char]] = [Number(char)];
    }
  }
  return results;
}

// Tests
assertArraysEqual(letterPositions('hello')['h'], [0]);
assertArraysEqual(letterPositions('hello')['e'], [1]);
assertArraysEqual(letterPositions('hello')['l'], [2, 3]);
assertArraysEqual(letterPositions('hello')['o'], [4]);
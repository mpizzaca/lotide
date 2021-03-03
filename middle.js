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

const middle = function(array) {
  if (array.length < 3) {
    return [];
  }
  const mid = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    // Even number of elements - return two middle elements
    return [array[mid - 1], array[mid]];
  } else {
    // Odd number of elements - return one middle element
    return [array[mid]];
  }
};

console.log(`Test 1: empty/1 elem/2 elem arrays should return emtpy array`);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
console.log(`Test 2: arrays with odd number of elements should return one middle element`);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle(['my', 'name', 'is', 'mitchell', 'pizzacalla']), ['is']);
console.log(`Test 3: arrays with even number of elements should return two middle elements`);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle(['will', 'this', 'work?', 'lets', 'find', 'out!']), ['work?', 'lets']);
console.log(`Test 4: check original array is not modified`);
const testArray = [1, 2, 3, 4]
middle(testArray);
assertArraysEqual(testArray, [1, 2, 3, 4]);




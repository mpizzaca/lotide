const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

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
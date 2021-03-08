const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case 1: Check returned array elements
const result = tail([1, 2, 3]);
assertEqual(result.length, 2);
assertEqual(result[0], 2);
assertEqual(result[1], 3);

// Test Case 2: Check original array is unmodified
const words = ['Light', 'House', 'Labs'];
tail(words);
assertEqual(words.length, 3);

// Test Case 3: Check we get an empty array if we pass an array with 1 element
const word = ['Hi'];
const empty = tail(word);
assertEqual(empty.length, 0);

// Test Case 4: Check we get an empty array if we pass in an empty array
const emptyTwo = tail([]);
assertEqual(emptyTwo.length, 0);
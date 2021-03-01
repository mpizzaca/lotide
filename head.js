const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  return array[0];
};

assertEqual(head([10, 2, 6]), 10);
assertEqual(head(['Mitchell', 'Gaby', 'Jaocquim', 'Martin', 'Zac']), 'Mitchell');
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);
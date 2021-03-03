const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  // Remove spaces and make lowercase
  sentence = sentence.split(' ').join('').toLowerCase();
  let result = {};
  for (let letter of sentence) {
    result[letter] = result[letter] ? result[letter] + 1 : 1
  }
  return result;
}

console.log(countLetters('Lighthouse is the best!'));
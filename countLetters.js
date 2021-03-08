const countLetters = function(sentence) {
  // Remove spaces and make lowercase
  sentence = sentence.split(' ').join('').toLowerCase();
  let result = {};
  for (let letter of sentence) {
    result[letter] = result[letter] ? result[letter] + 1 : 1
  }
  return result;
}

module.exports = countLetters;
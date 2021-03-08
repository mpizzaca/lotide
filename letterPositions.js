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

module.exports = letterPositions;
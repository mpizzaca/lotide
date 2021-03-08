const without = function(array, itemsToRemove) {
  let result = [];
  for (let i in array) {
    if (!itemsToRemove.includes(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
};

module.exports = without;
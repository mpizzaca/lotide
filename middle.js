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

module.exports = middle;
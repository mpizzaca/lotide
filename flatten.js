const flatten = function(array) {
  let output = [];
  for (let element of array) {
    if (!Array.isArray(element)) {
      // Element is not an array
      // Just push to our output array
      output.push(element);
    } else {
      // Element is an array
      // Loop through it adding all inner elements to our output array
      for (let i = 0; i < element.length; i++) {
        output.push(element[i]);
      }
    }
  }
  return output;
};

module.exports = flatten;
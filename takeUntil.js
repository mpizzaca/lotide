const takeUntil = (array, callback) => {
  const result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      break;
    }
  }
  return result;
};

module.exports = takeUntil;
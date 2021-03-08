const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      result[item] = result[item] ? result[item] + 1 : 1;
    }
  }
  return result;
};

module.exports = countOnly;
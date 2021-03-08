const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  // Check key/value count is the same
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  // Check values are the same
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] instanceof Object &&
               object2[key] instanceof Object &&
               !Array.isArray(object1[key])   &&
               !Array.isArray(object2[key])) {
      if(!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  // If all checks passed, return true
  return true;
};

module.exports = eqObjects;
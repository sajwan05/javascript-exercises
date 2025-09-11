const removeFromArray = function(array, ...argu) {
//   12345, 3 1245
    return array.filter((item) => !argu.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;

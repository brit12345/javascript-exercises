const removeFromArray = function(array, ...rem) {
    return array.filter(index => !rem.includes(index));
};
// Do not edit below this line
module.exports = removeFromArray;

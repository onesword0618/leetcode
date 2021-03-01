/**
 * @param {number[]} gain
 * @return {number}
 */
module.exports = largestAltitude = function(gain) {
 return Math.max(...gain.reduce((acc, x) => [...acc, acc[acc.length - 1] + x], [0]))
};
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const smallestRangeI = function (A, K) {
  return Math.max(0, Math.max(...A) - Math.min(...A) - 2 * K);
};
module.exports = smallestRangeI;

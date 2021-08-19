/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = sumOfUnique = function (nums) {
  return nums
    .filter((n, i, arr) => arr.lastIndexOf(n) == arr.indexOf(n))
    .reduce((sum, cur) => (sum += cur), 0);
};

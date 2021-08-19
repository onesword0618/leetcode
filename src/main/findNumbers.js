/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function (nums) {
  return nums.map(String).reduce((previousValue, currentValue) => {
    return previousValue + (!(currentValue.length & 1) ? 1 : 0);
  }, 0);
};
module.exports = findNumbers;

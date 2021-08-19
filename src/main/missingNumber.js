/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  let length = nums.length;
  return (length * (length + 1)) / 2 - nums.reduce((a, b) => a + b);
};
module.exports = missingNumber;

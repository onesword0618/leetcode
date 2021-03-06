/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 module.exports = minSubArrayLen = function(target, nums) {
  let i = 0;
  let j = 0;
  let sum = 0;
  let min = Infinity;
  while (j <= nums.length) {
      if (sum >= target) {
          min = Math.min(min, j-i);
          sum -= nums[i++];
      } else {
          sum += nums[j++];
      }
  };
  return (min == Infinity) ? 0 : min;
};
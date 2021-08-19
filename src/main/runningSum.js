/**
 * @param {number[]} nums
 * @return {number[]}
 */
module.exports = (nums) => {
  return nums.reduce((prev, num, i) => [...prev, (prev[i - 1] || 0) + num], []);
};

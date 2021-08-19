/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
module.exports = (nums, index) => {
  let target = [];
  index.forEach((x, idx) => target.splice(x, 0, nums[idx]));
  return target;
};

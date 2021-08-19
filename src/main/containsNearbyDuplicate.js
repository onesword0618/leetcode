/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
module.exports = (nums, k) => {
  let m = new Map();
  for (i = 0; i < nums.length; i++) {
    if (!m.has(nums[i])) m.set(nums[i], i);
    else {
      if (i - m.get(nums[i]) <= k) return true;
      else m.set(nums[i], i);
    }
  }
  return false;
};

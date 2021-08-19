/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
module.exports = containsNearbyAlmostDuplicate = (nums, k, t) => {
  for (i = 0; i <= nums.length; i++) {
    for (j = i + 1; j <= i + k; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t) return true;
    }
  }
  return false;
};

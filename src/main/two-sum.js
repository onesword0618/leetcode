/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
module.exports = (nums, target) => {
  const compare = {};
  const length = nums.length;

  for (let index = 0; index < length; index++) {
    if (compare[nums[index]] >= 0) {
      return [compare[nums[index]], index];
    }
    compare[target - nums[index]] = index;
  }
};

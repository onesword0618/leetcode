/**
 * @param {number[]} nums
 * @return {number[]}
 */
module.exports = (nums) => {
  const abs = Math.abs;
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    let num = abs(nums[i]);
    nums[num - 1] = -abs(nums[num - 1]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) res.push(i + 1);
  }
  return res;
};

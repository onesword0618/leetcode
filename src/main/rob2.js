/**
 * @param {number[]} nums
 * @return {number}
 */
 module.exports = rob2 = nums => {
  let r1 = nums[0];
  let s1 = r2 = s2 = 0;
  for (let i = 1; i < nums.length; i++){
      [r1,s1,r2,s2] = [s1 + nums[i], Math.max(r1, s1), s2 + nums[i], Math.max(r2, s2)];
  };
  return Math.max(s1, r2, s2, nums[0]) || 0;
};
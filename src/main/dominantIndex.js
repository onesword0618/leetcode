/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = (nums) => {
  return nums.findIndex(
    (num) =>
      num === Math.max(...nums) && nums.every((n) => n === num || n * 2 <= num)
  );
};

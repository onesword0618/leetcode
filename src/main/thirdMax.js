/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = thirdMax = function (nums) {
  let arr = Array.from(new Set(nums));

  if (arr.length < 3) {
    return Math.max(...arr);
  }

  arr.splice(arr.indexOf(Math.max(...arr)), 1);
  arr.splice(arr.indexOf(Math.max(...arr)), 1);
  return Math.max(...arr);
};

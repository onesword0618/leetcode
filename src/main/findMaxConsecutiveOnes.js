/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = (nums) => {
  return Math.max(
    ...nums
      .join("")
      .split(0)
      .map((x) => x.length)
  );
};

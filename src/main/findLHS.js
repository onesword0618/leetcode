/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = (nums) => {
  nums.sort((a, b) => a - b);
  let reverse = nums.slice().reverse();
  let len = nums.length;
  let lengths = [];

  nums.forEach((cur, idx, arr) => {
    if (arr[idx + 1] - arr[idx] == 1) {
      let idx1 = arr.indexOf(arr[idx]);
      let idx2 = len - reverse.indexOf(arr[idx + 1]) - 1;
      lengths.push(idx2 - idx1 + 1);
    }
  });
  return lengths.length == 0 ? 0 : Math.max(...lengths);
};

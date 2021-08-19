/**
 * @param {number[]} nums
 * @return {number[]}
 */
module.exports = (nums) => {
  nums.sort((a, b) => b - a);
  let total = nums.reduce((total, num) => {
    return total + num;
  });
  let sum = 0,
    res = [];
  for (let num of nums) {
    sum += num;
    res.push(num);
    if (sum > total - sum) {
      break;
    }
  }
  return res;
};

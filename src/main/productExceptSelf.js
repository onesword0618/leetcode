/**
 * @param {number[]} nums
 * @return {number[]}
 */
module.exports = productExceptSelf = (nums) => {
  const length = nums.length;
  const answer = Array(length).fill(1);
  const leftp = Array(length).fill(1);
  const rightp = Array(length).fill(1);

  for (let i = 1; i < leftp.length; i++) {
    leftp[i] = nums[i - 1] * leftp[i - 1];
  }

  for (let j = rightp.length - 2; j >= 0; j--) {
    rightp[j] = nums[j + 1] * rightp[j + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    answer[i] = leftp[i] * rightp[i];
  }
  return answer;
};

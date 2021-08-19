/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
module.exports = minSubarray = function (nums, p) {
  const dp = { 0: -1 };
  const sum = nums.reduce((a, x) => a + x);
  if (sum < p) return -1;

  const rem = sum % p;
  if (rem == 0) return 0;

  let best = nums.length;
  let search,
    curr = 0;
  nums.forEach((x, i) => {
    curr = (curr + x) % p;
    search = (curr - rem + p) % p; // keep in mind curr may be less than rem, so keep it posi
    if (dp.hasOwnProperty(search)) {
      best = Math.min(best, i - dp[search]);
    }
    dp[curr] = i;
  });
  return best < nums.length ? best : -1;
};

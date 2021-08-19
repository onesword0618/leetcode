/**
 * @param {string} s
 * @return {number}
 */
module.exports = maxScore = function (s) {
  let score = 0;
  let arr = s.split("").map((str) => Number(str));
  for (let i = 1; i < s.length; i++) arr[i] += arr[i - 1];
  for (let i = 0; i < arr.length - 1; i++) {
    let numOf0s = i + 1 - arr[i];
    let numOf1s = arr[arr.length - 1] - arr[i];
    score = Math.max(score, numOf0s + numOf1s);
  }
  return score;
};

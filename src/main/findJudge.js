/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function (N, trust) {
  const counts = new Array(N + 1).fill(0);

  for (let [i, j] of trust) {
    counts[i] -= 1;
    counts[j] += 1;
  }

  const length = counts.length;

  for (let i = 1; i < length; i++) {
    if (N - 1 === counts[i]) {
      return i;
    }
  }
  return -1;
};
module.exports = findJudge;

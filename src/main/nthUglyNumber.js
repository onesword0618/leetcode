/**
 * @param {number} n
 * @return {number}
 */
module.exports = nthUglyNumber = (n) => {
  let set = new Set();
  const INT_MAX = 2 ** 31 - 1;
  for (let i = 1; i <= INT_MAX; i *= 2) {
    for (let j = i; j <= INT_MAX; j *= 3) {
      for (let k = j; k <= INT_MAX; k *= 5) {
        set.add(k);
      }
    }
  }
  return Array.from(set).sort((a, b) => a - b)[n - 1];
};

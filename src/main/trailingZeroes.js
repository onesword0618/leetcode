/**
 * @param {number} n
 * @return {number}
 */
module.exports = trailingZeroes = (n, i = 5) => {
  return i > n ? 0 : Math.floor(n / i) + trailingZeroes(n, i * 5);
};

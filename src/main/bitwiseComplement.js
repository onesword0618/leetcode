/**
 * @param {number} N
 * @return {number}
 */
module.exports = (N) => {
  return N ^ parseInt("1".repeat(N.toString(2).length), 2);
};

/**
 * @param {number[]} A
 * @return {number[]}
 */
module.exports = (A) => {
  return A.map((e) => e * e).sort((a, b) => a - b);
};

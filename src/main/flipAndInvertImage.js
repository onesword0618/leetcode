/**
 * @param {number[][]} A
 * @return {number[][]}
 */
module.exports = (A) => {
  return A.map((row) => row.map((val) => val ^ 1).reverse());
};

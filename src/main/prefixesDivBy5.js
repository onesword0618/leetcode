/**
 * @param {number[]} A
 * @return {boolean[]}
 */
module.exports = (A) => {
  let acc = 0;
  return A.map((d) => !(acc = (acc * 2 + d) % 5));
};

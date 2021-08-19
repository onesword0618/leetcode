/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
module.exports = (A, B) => {
  let n = Math.ceil(B.length / A.length);
  return A.repeat(n).includes(B) ||
    A.repeat(++n).includes(B) ||
    A.repeat(++n).includes(B)
    ? n
    : -1;
};

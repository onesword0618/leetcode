/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
const rotateString = function (A, B) {
  return (B + B).indexOf(A) != -1 && A.length == B.length;
};
module.exports = rotateString;

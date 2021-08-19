/**
 * @param {number[][]} mat
 * @return {number}
 */
module.exports = diagonalSum = function (mat) {
  let sum = 0;

  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i];

    if (i !== mat[i].length - i - 1) {
      sum += mat[i][mat[i].length - i - 1];
    }
  }

  return sum;
};

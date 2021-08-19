/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
module.exports = (matrix) => {
  let length = matrix.length;
  let baseLength = matrix[0].length;

  for (let i = 0; i < length - 1; i++) {
    for (var j = 0; j < baseLength - 1; j++) {
      if (matrix[i][j] != matrix[i + 1][j + 1]) {
        return false;
      }
    }
  }
  return true;
};

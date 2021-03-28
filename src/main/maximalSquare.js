/**
 * @param {character[][]} matrix
 * @return {number}
 */
 module.exports = maximalSquare = matrix => {
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
          if (matrix[i][j] === "0") {
              continue
          };
          if(i > 0 && j > 0) {
              matrix[i][j] = Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) + 1
          };
          max = Math.max(matrix[i][j], max);
      };
  };
  return max ** 2
};
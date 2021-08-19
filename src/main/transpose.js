/**
 * @param {number[][]} A
 * @return {number[][]}
 */
module.exports = (A) => {
  let result = [];
  let size = A.length;
  let innerSize = A[0].length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < innerSize; j++) {
      if (result[j] == null) {
        result[j] = [];
      }
      result[j][i] = A[i][j];
    }
  }
  return result;
};

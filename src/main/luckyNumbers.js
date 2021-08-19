/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
module.exports = luckyNumbers = function (matrix) {
  const luckey = [];

  for (let i = 0; i < matrix.length; i++) {
    const x = matrix[i].indexOf(Math.min(...matrix[i]));
    if (x === -1) {
      continue;
    }

    let flag = true;

    for (let j = 0; j < matrix.length; j++) {
      if (j == i) {
        continue;
      }

      if (x <= matrix[j].length) {
        if (matrix[i][x] < matrix[j][x]) {
          flag = false;
          break;
        }
      }
    }

    if (flag) {
      luckey.push(matrix[i][x]);
    }
  }
  return luckey;
};

/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
module.exports = oddCells = function (n, m, indices) {
  let arr = Array(n)
    .fill(0)
    .map((x) => Array(m).fill(0));
  let row = {},
    col = {};
  for (let [a, b] of indices) {
    if (!row[a]) row[a] = 0;
    row[a]++;
    if (!col[b]) col[b] = 0;
    col[b]++;
  }

  for (let key in row) {
    for (let i = 0; i < m; i++) {
      arr[key][i] = arr[key][i] + row[key];
    }
  }
  for (var key in col) {
    for (let i = 0; i < n; i++) {
      arr[i][key] += col[key];
    }
  }

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] % 2 != 0) {
        count++;
      }
    }
  }
  return count;
};

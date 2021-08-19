/**
 * @param {number[][]} grid
 * @return {number}
 */
module.exports = (grid) => {
  let output = 0;

  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      if (grid[i][j] == 5) {
        output += checkSquare(grid, i, j);
      }
    }
  }
  return output;
};

function checkSquare(grid, i, j) {
  let array = [],
    set;

  for (let i2 = i - 1; i2 < i + 2; i2++) {
    let row_summ = 0;

    for (let j2 = j - 1; j2 < j + 2; j2++) {
      if (grid[i2][j2] > 9) {
        return 0;
      }
      row_summ += grid[i2][j2];
      array.push(grid[i2][j2]);
    }
    if (row_summ != 15) {
      return 0;
    }
  }

  if (array[0] + array[3] + array[6] != 15) {
    return 0;
  }

  set = new Set(array);
  if (set.size == 9 && array.reduce((sum, item) => sum + item) == 45) {
    return 1;
  }
  return 0;
}

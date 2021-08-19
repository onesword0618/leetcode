/**
 * @param {number[][]} grid
 * @return {number}
 */
module.exports = (grid) => {
  return grid.reduce(
    (acc, row) => acc + row.filter((num) => num < 0).length,
    0
  );
};

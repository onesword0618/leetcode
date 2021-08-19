/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
module.exports = (image, sr, sc, newColor) => {
  let dfs = (image, row, col, val) => {
    if (row < 0 || col < 0 || row >= image.length || col >= image[0].length) {
      return;
    } else if (image[row][col] === val) {
      image[row][col] = -1;

      dfs(image, row - 1, col, val);
      dfs(image, row + 1, col, val);
      dfs(image, row, col - 1, val);
      dfs(image, row, col + 1, val);

      image[row][col] = newColor;
    } else {
      return;
    }
  };
  dfs(image, sr, sc, image[sr][sc]);
  return image;
};

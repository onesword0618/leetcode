const numIslands = require("./../main/numIslands.js");
//      Question
//        Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.
//        An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

describe("引数の配列を水と島として見立てて島の数を返却する", () => {
  describe("numIslands(character[][] grid) を実行するとき", () => {
    test('prices = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]] を入力して1が返却されること', () => {
      expect(
        numIslands([
          ["1", "1", "1", "1", "0"],
          ["1", "1", "0", "1", "0"],
          ["1", "1", "0", "0", "0"],
          ["0", "0", "0", "0", "0"],
        ])
      ).toBe(1);
    });

    test('grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]] を入力して3が返却されること', () => {
      expect(
        numIslands([
          ["1", "1", "0", "0", "0"],
          ["1", "1", "0", "0", "0"],
          ["0", "0", "1", "0", "0"],
          ["0", "0", "0", "1", "1"],
        ])
      ).toBe(3);
    });
  });
});

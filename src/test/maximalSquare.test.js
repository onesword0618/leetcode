const maximalSquare = require("./../main/maximalSquare");
//      Question
//        Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

describe("最大の四角の大きさの数を返却する", () => {
  describe("maximalSquare(character[][] matrix) を実行するとき", () => {
    test('matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]を入力して19が返却されること', () => {
      expect(
        maximalSquare([
          ["1", "0", "1", "0", "0"],
          ["1", "0", "1", "1", "1"],
          ["1", "1", "1", "1", "1"],
          ["1", "0", "0", "1", "0"],
        ])
      ).toBe(4);
    });

    test('matrix =  [["0","1"],["1","0"]]を入力して19が返却されること', () => {
      expect(
        maximalSquare([
          ["0", "1"],
          ["1", "0"],
        ])
      ).toBe(1);
    });

    test('matrix = [["0"]]を入力して19が返却されること', () => {
      expect(maximalSquare([["0"]])).toBe(0);
    });
  });
});

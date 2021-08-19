const matrixScore = require("./../main/matrixScore.js");
//    Question
//      We have a two dimensional matrix A where each value is 0 or 1.
//      A move consists of choosing any row or column, and toggling each value in that row or column: changing all 0s to 1s, and all 1s to 0s.
//      After making any number of moves, every row of this matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.
//      Return the highest possible score.

describe("2次元配列を反転して2進数で計算した際の値を返却する", () => {
  describe("matrixScore (number[][] A) を実行するとき", () => {
    test("A = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]を入力して39が返却されること", () => {
      expect(
        matrixScore([
          [0, 0, 1, 1],
          [1, 0, 1, 0],
          [1, 1, 0, 0],
        ])
      ).toBe(39);
    });
  });
});

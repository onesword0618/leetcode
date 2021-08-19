const numMagicSquaresInside = require("./../main/numMagicSquaresInside.js");
//      Question
//         A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, column,
//         and both diagonals all have the same sum.
//         Given an grid of integers, how many 3 x 3 "magic square" subgrids are there ? (Each subgrid is contiguous).

describe("引数の配列で3*3で対角線がすべて同じ合計になる数を返却する", () => {
  describe("numMagicSquaresInside(number[][] grid) を実行するとき", () => {
    test("grid = [4,3,8,4],[9, 5, 1, 9],[2, 7, 6, 2] を入力して1が返却されること", () => {
      expect(
        numMagicSquaresInside([
          [4, 3, 8, 4],
          [9, 5, 1, 9],
          [2, 7, 6, 2],
        ])
      ).toBe(1);
    });
  });
});

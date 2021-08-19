const transpose = require("./../main/transpose");
//      Question
//           Given a matrix A, return the transpose of A.
//           The transpose of a matrix is the matrix flipped over
//           it's main diagonal, switching the row and column indices of the matrix.

describe("行列の行と列のインデックスを入れ替えた結果を返却する", () => {
  describe("transpose(number[][] A) を実行するとき", () => {
    test("A = [[1,2,3],[4,5,6],[7,8,9]]を入力して[[1,4,7],[2,5,8],[3,6,9]]が返却されること", () => {
      expect(
        transpose([
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ])
      ).toEqual(
        expect.arrayContaining([
          [1, 4, 7],
          [2, 5, 8],
          [3, 6, 9],
        ])
      );
    });

    test("A = [[1,2,3],[4,5,6]]を入力して[[1,4],[2,5],[3,6]]が返却されること", () => {
      expect(
        transpose([
          [1, 2, 3],
          [4, 5, 6],
        ])
      ).toEqual(
        expect.arrayContaining([
          [1, 4],
          [2, 5],
          [3, 6],
        ])
      );
    });
  });
});

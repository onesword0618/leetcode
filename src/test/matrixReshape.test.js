const matrixReshape = require("./../main/matrixReshape");
//      Question
//           In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.
//           You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.
//           The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.
//           If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

describe("配列のマトリックスを渡して元の行列を返却する", () => {
  describe("matrixReshape(number[][] nums,r,c) を実行するとき", () => {
    test("nums = [[1, 2], [3, 4]], r = 1, c = 4を入力して[[1, 2, 3, 4]]が返却されること", () => {
      expect(
        matrixReshape(
          [
            [1, 2],
            [3, 4],
          ],
          1,
          4
        )
      ).toEqual(expect.arrayContaining([[1, 2, 3, 4]]));
    });

    test("nums = [[1, 2], [3, 4]], r = 2, c = 4を入力して[[1, 2], [3, 4]]が返却されること", () => {
      expect(
        matrixReshape(
          [
            [1, 2],
            [3, 4],
          ],
          2,
          4
        )
      ).toEqual(
        expect.arrayContaining([
          [1, 2],
          [3, 4],
        ])
      );
    });
  });
});

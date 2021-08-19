const diagonalSum = require("./../main/diagonalSum");
//   Question
//      Given a square matrix mat, return the sum of the matrix diagonals.
//      Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

describe("渡した引数に対角行の合計を返却する", () => {
  test("[[1,2,3],[4,5,6],[7,8,9]]の引数を渡して25が返却される", () => {
    expect(
      diagonalSum([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toBe(25);
  });

  test("[[ 5 ]]の引数を渡して5が返却される", () => {
    expect(diagonalSum([[5]])).toBe(5);
  });
});

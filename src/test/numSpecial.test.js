const numSpecial = require("./../main/numSpecial");
//   Question
//      Given a rows x cols matrix mat, where mat[i][j] is either 0 or 1, return the number of special positions in mat.
//      A position (i,j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

describe("バイナリ行列の特別な位置を返却する", () => {
  test("[[1,0,0],[0,0,1],[1,0,0]]の引数を渡して1が返却される", () => {
    expect(
      numSpecial([
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 0],
      ])
    ).toBe(1);
  });

  test("[[1,0,0],[0,1,0],[0,0,1]]の引数を渡して3が返却される", () => {
    expect(
      numSpecial([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ])
    ).toBe(3);
  });

  test("[[0,0,0,1],[1,0,0,0],[0,1,1,0],[0,0,0,0]]の引数を渡して2が返却される", () => {
    expect(
      numSpecial([
        [0, 0, 0, 1],
        [1, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ])
    ).toBe(2);
  });

  test("[[0,0,0,0,0],[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,1]]の引数を渡して3が返却される", () => {
    expect(
      numSpecial([
        [0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1],
      ])
    ).toBe(3);
  });
});

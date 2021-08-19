const countNegatives = require("./../main/countNegatives");
//   Question
//      Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise.
//      Return the number of negative numbers in grid.

describe("渡した引数で並べ替えられた行列の負の数の個数を返却する", () => {
  test("[[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]の引数を渡して8が返却される", () => {
    expect(
      countNegatives([
        [4, 3, 2, -1],
        [3, 2, 1, -1],
        [1, 1, -1, -2],
        [-1, -1, -2, -3],
      ])
    ).toBe(8);
  });

  test("[[3,2],[1,0]]の引数を渡して0が返却される", () => {
    expect(
      countNegatives([
        [3, 2],
        [1, 0],
      ])
    ).toBe(0);
  });

  test("[[1,-1],[-1,-1]]の引数を渡して3が返却される", () => {
    expect(
      countNegatives([
        [1, -1],
        [-1, -1],
      ])
    ).toBe(3);
  });

  test("[[-1]]の引数を渡して1が返却される", () => {
    expect(countNegatives([[-1]])).toBe(1);
  });
});

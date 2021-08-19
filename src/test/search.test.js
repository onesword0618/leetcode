const search = require("./../main/search");
//   Question
//      Given a sorted (in ascending order) integer array nums of n elements and a target value,
//      write a function to search target in nums. If target exists, then return its index, otherwise return -1.

describe("渡した引数の配列と対象の値を渡して2分探索したインデックスを返却する", () => {
  test("[-1,0,3,5,9,12],9の引数を渡して4が返却される", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });

  test("[-1,0,3,5,9,12],2の引数を渡して-1が返却される", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });
});

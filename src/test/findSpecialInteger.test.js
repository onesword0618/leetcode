const findSpecialInteger = require("./../main/findSpecialInteger");
//   Question
//      Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time.
//      Return that integer.

describe("渡した引数の要素が25%以上締めている数を返却する", () => {
  test("[1,2,2,6,6,6,6,7,10]の引数を渡して6が返却される", () => {
    expect(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10])).toBe(6);
  });
});

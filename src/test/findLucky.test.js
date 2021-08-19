const findLucky = require("./../main/findLucky");
//   Question
//      Given an array of integers arr,
//      a lucky integer is an integer which has a frequency in the array equal to its value.
//      Return a lucky integer in the array.
//      If there are multiple lucky integers return the largest of them. If there is no lucky integer return -1.

describe("渡した引数の配列内のラッキー整数を返却する", () => {
  test("[2,2,3,4]の引数を渡して2が返却される", () => {
    expect(findLucky([2, 2, 3, 4])).toBe(2);
  });

  test("[1,2,2,3,3,3]の引数を渡して3が返却される", () => {
    expect(findLucky([1, 2, 2, 3, 3, 3])).toBe(3);
  });

  test("[2,2,2,3,3]の引数を渡して-1が返却される", () => {
    expect(findLucky([2, 2, 2, 3, 3])).toBe(-1);
  });

  test("[5]の引数を渡して-1が返却される", () => {
    expect(findLucky([5])).toBe(-1);
  });

  test("[7,7,7,7,7,7,7]の引数を渡して7が返却される", () => {
    expect(findLucky([7, 7, 7, 7, 7, 7, 7])).toBe(7);
  });
});

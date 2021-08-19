const specialArray = require("./../main/specialArray");
//   Question
//      You are given an array nums of non-negative integers.
//      nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.
//      Notice that x does not have to be an element in nums.
//      Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.

describe("渡した引数の配列の数をを返却するその際に、配列の数より配列の要素の値が大きくなければ-1を返却する", () => {
  test("[3,5]の引数を渡して2が返却される", () => {
    expect(specialArray([3, 5])).toBe(2);
  });

  test("[0,0]の引数を渡して-1が返却される", () => {
    expect(specialArray([0, 0])).toBe(-1);
  });

  test("[1]の引数を渡して1が返却される", () => {
    expect(specialArray([1])).toBe(1);
  });

  test("[4,5,6]の引数を渡して3が返却される", () => {
    expect(specialArray([4, 5, 6])).toBe(3);
  });
});

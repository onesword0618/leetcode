const validMountainArray = require("./../main/validMountainArray");
//   Question
//      Given an array of integers arr, return true if and only if it is a valid mountain array.
//      Recall that arr is a mountain array if and only if:

describe("与えられた配列が山なりかという判断の結果を返却する", () => {
  test("[2,1]を渡してfalseが返却される", () => {
    expect(validMountainArray([2, 1])).toBeFalsy();
  });

  test("[3,5,5]を渡してfalseが返却される", () => {
    expect(validMountainArray([3, 5, 5])).toBeFalsy();
  });

  test("[0,3,2,1]を渡してtrueが返却される", () => {
    expect(validMountainArray([0, 3, 2, 1])).toBeTruthy();
  });
});

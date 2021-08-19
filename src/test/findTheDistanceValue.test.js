const findTheDistanceValue = require("./../main/findTheDistanceValue");
//   Question
//      Given two integer arrays arr1 and arr2, and the integer d,
//      return the distance value between the two arrays.
//      The distance value is defined as the number of elements arr1[i] such that
//      there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

describe("渡した引数の配列の距離の値の結果を返却する", () => {
  test("arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2の引数を渡して2が返却される", () => {
    expect(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2)).toBe(2);
  });

  test("arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3の引数を渡して2が返却される", () => {
    expect(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3)).toBe(
      2
    );
  });

  test("arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6の引数を渡して1が返却される", () => {
    expect(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6)).toBe(
      1
    );
  });
});

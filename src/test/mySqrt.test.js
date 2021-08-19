const mySqrt = require("./../main/mySqrt.js");
//      Question
//           Implement int sqrt(int x).
//           Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
//           Since the return type is an integer,
//           the decimal digits are truncated and only the integer part of the result is returned.

describe("負でない整数のXから平方根を計算してその結果を返却する", () => {
  describe("mySqrt(number x) を実行するとき", () => {
    test("x = 4 を入力して2が返却されること", () => {
      expect(mySqrt(4)).toBe(2);
    });

    test("x = 8 を入力して2が返却されること", () => {
      expect(mySqrt(8)).toBe(2);
    });
  });
});

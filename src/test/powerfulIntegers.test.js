const powerfulIntegers = require("./../main/powerfulIntegers");
//      Question
//           Given two positive integers x and y, an integer is powerful if it is equal to x^i + y^j for some integers i >= 0 and j >= 0.
//           Return a list of all powerful integers that have value less than or equal to bound.
//           You may return the answer in any order.  In your answer, each value should occur at most once.

describe("引数を渡してべき乗の結果の配列を返却する", () => {
  describe("powerfulIntegers(number x,number y, number bound) を実行するとき", () => {
    test("x = 2, y = 3, bound = 10を入力して[2,3,4,5,7,9,10]が返却されること", () => {
      expect(powerfulIntegers(2, 3, 10)).toEqual(
        expect.arrayContaining([2, 3, 4, 5, 7, 9, 10])
      );
    });

    test("x = 3, y = 5, bound = 15を入力して[2,4,6,8,10,14]が返却されること", () => {
      expect(powerfulIntegers(3, 5, 15)).toEqual(
        expect.arrayContaining([2, 4, 6, 8, 10, 14])
      );
    });
  });
});

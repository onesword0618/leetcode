const isPowerOfFour = require("./../main/isPowerOfFour.js");
//      Question
//           Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

describe("引数の数字に対して4の累乗かの判定を返却する", () => {
  describe("isPowerOfFour(number num) を実行するとき", () => {
    test("num =16を入力して真が返却されること", () => {
      expect(isPowerOfFour(16)).toBeTruthy();
    });

    test("num = 5を入力して偽が返却されること", () => {
      expect(isPowerOfFour(5)).toBeFalsy();
    });
  });
});

const isPerfectSquare = require("./../main/isPerfectSquare.js");
//    Question
//       Given a positive integer num, write a function which returns True if num is a perfect square else False.

describe("引数で渡した値が正四角型かどうか判断して返却する", () => {
  describe("isPerfectSquare(number num)  を実行するとき", () => {
    test("num =16 を入力して真を返却すること", () => {
      expect(isPerfectSquare(16)).toBeTruthy();
    });

    test("num =14 を入力して偽を返却すること", () => {
      expect(isPerfectSquare(14)).toBeFalsy();
    });
  });
});

const canMakeArithmeticProgression = require("./../main/canMakeArithmeticProgression.js");
//    Question
//       Given an array of numbers arr. A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.
//       Return true if the array can be rearranged to form an arithmetic progression, otherwise, return false.

describe("要素を並び替えして計算が成立するかを判断して返却する", () => {
  describe("canMakeArithmeticProgression(number[] arr)  を実行するとき", () => {
    test("arr = [1,2,4]を入力して偽を返却すること", () => {
      expect(canMakeArithmeticProgression([1, 2, 4])).toBeFalsy();
    });
    test("arr = [3,5,1]を入力して真を返却すること", () => {
      expect(canMakeArithmeticProgression([3, 5, 1])).toBeTruthy();
    });
  });
});

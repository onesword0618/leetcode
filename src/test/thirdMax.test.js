const thirdMax = require("./../main/thirdMax.js");
//    Question
//       Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

describe("3番目の大きさの数の要素を返却する", () => {
  describe("thirdMax(number[] nums)  を実行するとき", () => {
    test("number[] = [3, 2, 1]を引数に1が返却されること", () => {
      expect(thirdMax([3, 2, 1])).toBe(1);
    });

    test("number[] = [1, 2]を引数に2が返却されること", () => {
      expect(thirdMax([1, 2])).toBe(2);
    });
  });
});

const arrayPairSum = require("./../main/arrayPairSum.js");
//      Question
//          IGiven an array of 2n integers, your task is to group these integers into n pairs of integer,
//          say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

describe("引数の配列をグルーピングをしてルールに従って計算して返却する", () => {
  describe("arrayPairSum(number[] nums) を実行するとき", () => {
    test("nums = [1, 4, 3, 2] を入力して4が返却されること", () => {
      expect(arrayPairSum([1, 4, 3, 2])).toBe(4);
    });
  });
});

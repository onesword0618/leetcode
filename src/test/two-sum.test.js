const twoSum = require("./../main/two-sum.js");
//    Question
//      Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//      You may assume that each input would have exactly one solution, and you may not use the same element twice.

describe("第二引数の数字になるように第一引数の配列の特定の要素を加算しそのインデックスを返却する \n 同じ要素を繰り返し利用することができない", () => {
  describe("twoSum(nums, target)が実行されたとき", () => {
    test("target=9の場合、[0,1]が返却されること", () => {
      expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    test("target=17の場合、[0,3]が返却されること", () => {
      expect(twoSum([2, 7, 11, 15], 17)).toEqual([0, 3]);
    });

    test("target=26の場合、[2,3]が返却されること", () => {
      expect(twoSum([2, 7, 11, 15], 26)).toEqual([2, 3]);
    });
  });
});

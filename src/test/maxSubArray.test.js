const maxSubArray = require("./../main/maxSubArray.js");
//    Question
//      Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

describe("引数の配列から入れ子の配列の数を返却する", () => {
  describe("maxSubArray(nums = [-2,1,-3,4,-1,2,1,-5,4])  を実行するとき", () => {
    test("[-2,1,-3,4,-1,2,1,-5,4]を引数に 6が返却されること", () => {
      expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    });
  });
});

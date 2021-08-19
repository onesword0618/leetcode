const findLHS = require("./../main/findLHS.js");
//      Question
//          We define a harmounious array as an array where the difference between its maximum value and its minimum value is exactly 1.
//          Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.

describe("引数の配列をルールに従って導出した数を返却する", () => {
  describe("findLHS(number[] nums) を実行するとき", () => {
    test("nums = [1,3,2,2,5,2,3,7] を入力して5が返却されること", () => {
      expect(findLHS([1, 3, 2, 2, 5, 2, 3, 7])).toBe(5);
    });
  });
});

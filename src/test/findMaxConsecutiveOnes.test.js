const findMaxConsecutiveOnes = require("./../main/findMaxConsecutiveOnes.js");
//      Question
//        Given a binary array, find the maximum number of consecutive 1s in this array.

describe("引数の配列に対して配列で連続する1の最大数を返却する", () => {
  describe("findMaxConsecutiveOnes(number[] nums) を実行するとき", () => {
    test("nums = [1,1,0,1,1,1] を入力して3が返却されること", () => {
      expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3);
    });
  });
});

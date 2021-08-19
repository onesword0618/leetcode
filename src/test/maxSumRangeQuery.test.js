const maxSumRangeQuery = require("./../main/maxSumRangeQuery");
//      Question
//        We have an array of integers, nums, and an array of requests where requests[i] = [starti, endi].
//        The ith request asks for the sum of nums[starti] + nums[starti + 1] + ... + nums[endi - 1] + nums[endi].
//        Both starti and endi are 0-indexed.
//        Return the maximum total sum of all requests among all permutations of nums.
//        Since the answer may be too large, return it modulo 109 + 7.

describe("任意の順列から得られる最大の合計数を返却する", () => {
  describe("maxSumRangeQuery(number[] nums, number[][] requests) を実行するとき", () => {
    test("nums = [1,2,3,4,5], requests = [[1,3],[0,1]] を入力して19が返却されること", () => {
      expect(
        maxSumRangeQuery(
          [1, 2, 3, 4, 5],
          [
            [1, 3],
            [0, 1],
          ]
        )
      ).toBe(19);
    });

    test("nums = [1,2,3,4,5,6], requests = [[0,1]] を入力して11が返却されること", () => {
      expect(maxSumRangeQuery([1, 2, 3, 4, 5, 6], [[0, 1]])).toBe(11);
    });

    test("nums = [1,2,3,4,5,10], requests = [[0,2],[1,3],[1,1]] を入力して47が返却されること", () => {
      expect(
        maxSumRangeQuery(
          [1, 2, 3, 4, 5, 10],
          [
            [0, 2],
            [1, 3],
            [1, 1],
          ]
        )
      ).toBe(47);
    });
  });
});

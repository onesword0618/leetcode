const containsNearbyDuplicate = require("./../main/containsNearbyDuplicate.js");
//    Question
//   Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.
describe("絶対差の最大値を構成できる配列の要素があるかを判断して返却する", () => {
  describe("containsNearbyDuplicate(string s)  を実行するとき", () => {
    test("nums = [1,2,3,1], k = 3を入力して真を返却すること", () => {
      expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBeTruthy();
    });

    test("nums = [1,0,1,1], k = 1を入力して真を返却すること", () => {
      expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBeTruthy();
    });

    test("nums = [1,2,3,1,2,3], k = 2を入力して偽を返却すること", () => {
      expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBeFalsy();
    });
  });
});

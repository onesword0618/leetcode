const intersect = require("./../main/intersect");
//   Question
//      Given two integer arrays nums1 and nums2,
//      return an array of their intersection.
//      Each element in the result must appear as many times as it shows in both
//      arrays and you may return the result in any order.

describe("2つの配列の共通の要素の配列の結果を返却する", () => {
  describe("intersect (number[] nums1, number[] nums2) を実行するとき", () => {
    test("nums1 = [1,2,2,1], nums2 = [2,2] を入力して [2,2] が返却されること", () => {
      expect(intersect([1, 2, 2, 1], [2, 2])).toEqual(
        expect.arrayContaining([2, 2])
      );
    });
  });

  describe("intersect (number[] nums1, number[] nums2) を実行するとき", () => {
    test("nums1 = [4,9,5], nums2 = [9,4,9,8,4] を入力して [4,9] が返却されること", () => {
      expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toEqual(
        expect.arrayContaining([4, 9])
      );
    });
  });
});

const intersection = require("./../main/intersection");
//      Question
//           Given two arrays, write a function to compute their intersection.

describe("2つの配列の交差の結果の配列を返却する", () => {
  describe("intersection(number[] nums1,number[] nums2) を実行するとき", () => {
    test("nums1 = [1,2,2,1], nums2 = [2,2]を入力して[2]が返却されること", () => {
      expect(intersection([1, 2, 2, 1], [2, 2])).toEqual(
        expect.arrayContaining([2])
      );
    });

    test("nums1 = [4,9,5], nums2 = [9,4,9,8,4]を入力して[9,4]が返却されること", () => {
      expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual(
        expect.arrayContaining([9, 4])
      );
    });
  });
});

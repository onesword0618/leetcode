const largestSumAfterKNegations = require("./../main/largestSumAfterKNegations.js");
//    Question
//       Given an array A of integers, we must modify the array in the following way: we choose an i and replace A[i] with -A[i], and we repeat this process K times in total.  (We may choose the same index i multiple times.)
//       Return the largest possible sum of the array after modifying it in this way.

describe("引数の配列のインデックスを指定し、反対にして配列の合計を加算した数を返却する", () => {
  describe("largestSumAfterKNegations(number[] A, number K)  を実行するとき", () => {
    test("A = [4,2,3], K = 1を引数に5が返却されること", () => {
      expect(largestSumAfterKNegations([4, 2, 3], 1)).toBe(5);
    });

    test("A = [3,-1,0,2], K = 3を引数に6が返却されること", () => {
      expect(largestSumAfterKNegations([3, -1, 0, 2], 3)).toBe(6);
    });

    test("A = [2,-3,-1,5,-4], K = 2を引数に13が返却されること", () => {
      expect(largestSumAfterKNegations([2, -3, -1, 5, -4], 2)).toBe(13);
    });
  });
});

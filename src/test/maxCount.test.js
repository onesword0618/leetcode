const maxCount = require("./../main/maxCount.js");
//    Question
//      Given an m * n matrix M initialized with all 0's and several update operations.
//      Operations are represented by a 2D array, and each operation is represented by an array with two positive integers a and b,
//      which means M[i][j] should be added by one for all 0 <= i < a and 0 <= j < b.
//      You need to count and return the number of maximum integers in the matrix after performing all the operations.
describe("引数の配列にルールに従って加算した範囲の配列の数を返却する", () => {
  describe("maxCount(number m, number n,[][] ops)  を実行するとき", () => {
    test("m = 3, n = 3, operations = [[2,2],[3,3]]を引数に4が返却されること", () => {
      expect(
        maxCount(3, 3, [
          [2, 2],
          [3, 3],
        ])
      ).toBe(4);
    });
  });
});

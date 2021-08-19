const sortedSquares = require("./../main/sortedSquares.js");
//    Question
//        Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

describe("引数の配列の要素の値をその値で二乗して小さい順に並び替える", () => {
  describe("sortedSquares([nums]が実行されるとき)", () => {
    test("nums = [-4,-1,0,3,10]の場合、[0,1,9,16,100]が返却されること", () => {
      expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual(
        expect.arrayContaining([0, 1, 9, 16, 100])
      );
    });

    test("nums = [-7,-3,2,3,11]の場合、[4,9,9,49,121]が返却されること", () => {
      expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual(
        expect.arrayContaining([4, 9, 9, 49, 121])
      );
    });
  });
});

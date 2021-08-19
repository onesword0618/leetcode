const kidsWithCandies = require("./../main/kidsWithCandies.js");
//    Question
//      Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
//      For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them.
//      Notice that multiple kids can have the greatest number of candies.

describe("引数の配列をキャンディを持つ子どもに見立てて、子どもが最大値の数を取得することが可能かを判定し結果を返却する", () => {
  describe("kidsWithCandies(number[] nums)  を実行するとき", () => {
    test("number[] = [2,3,5,1,3] ,extraCandies = 3 を引数に[true,true,true,false,true]が返却されること", () => {
      expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toEqual(
        expect.arrayContaining([true, true, true, false, true])
      );
    });

    test("number[] = [4,2,1,1,2] ,extraCandies = 1 を引数に[true, false, false, false, false]が返却されること", () => {
      expect(kidsWithCandies([4, 2, 1, 1, 2], 1)).toEqual(
        expect.arrayContaining([true, false, false, false, false])
      );
    });

    test("number[] = [12, 1, 12] ,extraCandies = 10 を引数に[true, false, true]が返却されること", () => {
      expect(kidsWithCandies([12, 1, 12], 10)).toEqual(
        expect.arrayContaining([true, false, true])
      );
    });
  });
});

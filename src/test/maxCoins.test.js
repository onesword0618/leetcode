const maxCoins = require("./../main/maxCoins.js");
//    Question
//      There are 3n piles of coins of varying size, you and your friends will take piles of coins as follows:
//      In each step, you will choose any 3 piles of coins (not necessarily consecutive).
//      Of your choice, Alice will pick the pile with the maximum number of coins.
//      You will pick the next pile with maximum number of coins.
//      Your friend Bob will pick the last pile.
//      Repeat until there are no more piles of coins.
//      Given an array of integers piles where piles[i] is the number of coins in the ith pile.
//      Return the maximum number of coins which you can have.

describe("コインの山から自分が得ることができるコインの数を返却する", () => {
  describe("maxCoins(number[] plies) を実行するとき", () => {
    test("plies = [2,4,1,2,7,8] を引数に9が返却されること", () => {
      expect(maxCoins([2, 4, 1, 2, 7, 8])).toBe(9);
    });
  });

  describe("maxCoins(number[] plies) を実行するとき", () => {
    test("plies = [2,4,5] を引数に4が返却されること", () => {
      expect(maxCoins([2, 4, 5])).toBe(4);
    });
  });

  describe("maxCoins(number[] plies) を実行するとき", () => {
    test("plies = [9,8,7,6,5,1,2,3,4] を引数に18が返却されること", () => {
      expect(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4])).toBe(18);
    });
  });
});

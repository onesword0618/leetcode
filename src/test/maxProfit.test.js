const maxProfit = require("./../main/maxProfit.js");
//      Question
//        Say you have an array prices for which the ith element is the price of a given stock on day i.
//        Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
//        Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

describe("引数の配列を株価に見立てて一番利益がでる要素を返却する", () => {
  describe("maxProfit(number[] prices) を実行するとき", () => {
    test("prices = [7,1,5,3,6,4] を入力して7が返却されること", () => {
      expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
    });

    test("prices = [1,2,3,4,5] を入力して4が返却されること", () => {
      expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
    });
  });
});

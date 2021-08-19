const diffWaysToCompute = require("./../main/diffWaysToCompute.js");
//   Question
//      Given a string expression of numbers and operators,
//      return all possible results from computing all the different possible ways to group numbers and operators.
//      You may return the answer in any order.

describe("文字列に対して括弧を追加した配列を返却する", () => {
  describe("diffWaysToCompute(string expression)が実行されたとき", () => {
    test('expression = "2-1-1"の場合、[0,2]が返却されること', () => {
      expect(diffWaysToCompute("2-1-1")).toEqual(
        expect.arrayContaining([0, 2])
      );
    });

    test('expression = "2*3-4*5の場合、[-34,-14,-10,-10,10]が返却されること', () => {
      expect(diffWaysToCompute("2*3-4*5")).toEqual(
        expect.arrayContaining([-34, -14, -10, -10, 10])
      );
    });
  });
});

const minCostToMoveChips = require("./../main/minCostToMoveChips.js");
//      Question
//          There are some chips, and the i-th chip is at position chips[i].
//          You can perform any of the two following types of moves any number of times (possibly zero) on any chip:
//             Move the i-th chip by 2 units to the left or to the right with a cost of 0.
//             Move the i-th chip by 1 unit to the left or to the right with a cost of 1.
//             There can be two or more chips at the same position initially.
//             Return the minimum cost needed to move all the chips to the same position (any position).

describe("すべてのチップを同じ位置に重ねるための最小値のコストを返却する", () => {
  describe("minCostToMoveChips(number[] chips) を実行するとき", () => {
    test("chips = [1,2,3] を入力して1が返却されること", () => {
      expect(minCostToMoveChips([1, 2, 3])).toBe(1);
    });

    test("chips = [2,2,2,3,3] を入力して2が返却されること", () => {
      expect(minCostToMoveChips([2, 2, 2, 3, 3])).toBe(2);
    });
  });
});

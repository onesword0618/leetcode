const twoCitySchedCost = require("./../main/twoCitySchedCost.js");
//      Question
//         There are 2N people a company is planning to interview.
//         The cost of flying the i-th person to city A is costs[i][0], and the cost of flying the i-th person to city B is costs[i][1].
//         Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.

describe("2つの都市に行く費用を配列に定義するその内、費用が少ないほうを選択肢する。その最小コストを返却する", () => {
  describe("twoCitySchedCost(number [] costs) を実行するとき", () => {
    test("costs =[[10,20],[30,200],[400,50],[30,20]]を入力して110が返却されること", () => {
      expect(
        twoCitySchedCost([
          [10, 20],
          [30, 200],
          [400, 50],
          [30, 20],
        ])
      ).toBe(110);
    });
  });
});

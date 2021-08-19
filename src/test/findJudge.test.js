const findJudge = require("./../main/findJudge");
//    Question
//    In a town, there are N people labelled from 1 to N.
//    There is a rumor that one of these people is secretly the town judge.

//    If the town judge exists, then:
//    The town judge trusts nobody.
//    Everybody(except for the town judge) trusts the town judge.
//    There is exactly one person that satisfies properties 1 and 2.
//    You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.
//    If the town judge exists and can be identified, return the label of the town judge.Otherwise, return -1.

describe("この町では1-Nのようにラベリングされた人々がいる \n この中から秘密裏に裁判官をしている人のラベリングを探している \n 裁判官が存在する場合 \n  裁判官は誰も信用していない \n  裁判官を除く町の人は裁判官を信頼している  \n  この条件を満たす人は1人だけである \n  信用していることを表明するにはtrust[i]=[a,b] (aはbを信用している)を使う", () => {
  describe("findJudge が成功するとき", () => {
    test("人口が2人(1,2)で、片方のみが信用していること(1が2を信用している)", () => {
      expect(findJudge(2, [[1, 2]])).toBe(2);
    });

    test("人口が3人(1, 2, 3)で、2人が同じ人を信用していること(1と2が3を信用している)", () => {
      expect(
        findJudge(3, [
          [1, 3],
          [2, 3],
        ])
      ).toBe(3);
    });

    test("人口が4人(1, 2, 3 ,4)で、1人が複数人を信用しているが同じ人を全員信用していること(3人(1,2,4)が3を信用している)", () => {
      expect(
        findJudge(4, [
          [1, 3],
          [1, 4],
          [2, 3],
          [2, 4],
          [4, 3],
        ])
      ).toBe(3);
    });
  });

  describe("findJudge が失敗するとき", () => {
    test("人口が3人(1, 2, 3)で、2人(1,2)が信用しているがその人も他の人を信じていること(裁判官は誰も信用していない)", () => {
      expect(
        findJudge(3, [
          [1, 3],
          [2, 3],
          [3, 1],
        ])
      ).toBe(-1);
    });

    test("人口が3人(1, 2, 3)で、2人が別々の人を信用していること(裁判官を除く町の人は裁判官を信頼している)", () => {
      expect(
        findJudge(3, [
          [1, 2],
          [2, 3],
        ])
      ).toBe(-1);
    });

    test("人口が4人(1, 2, 3, 4)で、2人が同じ複数の人を信用していること(この条件を満たす人は1人だけである)", () => {
      expect(
        findJudge(4, [
          [1, 3],
          [1, 4],
          [2, 3],
          [2, 4],
        ])
      ).toBe(-1);
    });
  });
});

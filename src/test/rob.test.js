const rob = require("./../main/rob");
//    Question
//        You are a professional robber planning to rob houses along a street.
//        Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police
//        if two adjacent houses were broken into on the same night.
//
//        Given a list of non - negative integers representing the amount of money of each house,
//        determine the maximum amount of money you can rob tonight without alerting the police.

describe("あなたはプロの強盗として通りにある家を強盗する企画を立てている \n 家には一定量のお金が隠されており、唯一の制約は、隣接する家に同じ夜に強盗をしてはいけない \n 各家の金額を表す負でない整数のリストが与えられたら、警察に警告せずに今夜奪うことができる最大金額を決定する", () => {
  test("rob に[1,2,3,1]を渡した時、4が返却されるとき", () => {
    expect(rob([1, 2, 3, 1])).toBe(4);
  });

  test("rob に[2,7,9,3,1]を渡した時、12が返却されるとき", () => {
    expect(rob([2, 7, 9, 3, 1])).toBe(12);
  });
});

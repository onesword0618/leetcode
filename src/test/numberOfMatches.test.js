const numberOfMatches = require("./../main/numberOfMatches");
//   Question
//      You are given an integer n, the number of teams in a tournament that has strange rules:
//      - If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
//      - If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
//      Return the number of matches played in the tournament until a winner is decided.

describe("勝者が決定するまでのトーナメントでプレイされた試合数を返却する", () => {
  test("7の引数を渡して6が返却される", () => {
    expect(numberOfMatches(7)).toBe(6);
  });

  test("14の引数を渡して13が返却される", () => {
    expect(numberOfMatches(14)).toBe(13);
  });
});

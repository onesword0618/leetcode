const calPoints = require("./../main/calPoints");
//   Question
//      You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.
//      At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:
//      An integer x - Record a new score of x.
//      "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
//      "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
//      "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
//      Return the sum of all the scores on the record.

describe("渡した引数の文字列の配列を野球スコアに見立ててスコアの合計値を返却する", () => {
  test('["5","2","C","D","+"]の引数を渡して30が返却される', () => {
    expect(calPoints(["5", "2", "C", "D", "+"])).toBe(30);
  });

  test('["5","-2","4","C","D","9","+","+"]の引数を渡して27が返却される', () => {
    expect(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])).toBe(27);
  });

  test('["1"]の引数を渡して1が返却される', () => {
    expect(calPoints(["1"])).toBe(1);
  });
});

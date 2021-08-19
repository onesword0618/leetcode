const maxNumberOfBalloons = require("./../main/maxNumberOfBalloons.js");
//      Question
//         Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
//         You can use each character in text at most once.Return the maximum number of instances that can be formed.

describe("引数の文字列の中でballoonの文字列をいくつ生成できるかその数を返却する", () => {
  describe("maxNumberOfBalloons(string text) を実行するとき", () => {
    test("text = nlaebolko を入力して1が返却されること", () => {
      expect(maxNumberOfBalloons("nlaebolko")).toBe(1);
    });

    test("text = loonbalxballpoon を入力して2が返却されること", () => {
      expect(maxNumberOfBalloons("loonbalxballpoon")).toBe(2);
    });

    test("text = leetcode を入力して0が返却されること", () => {
      expect(maxNumberOfBalloons("leetcode")).toBe(0);
    });
  });
});

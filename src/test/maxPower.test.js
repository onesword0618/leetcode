const maxPower = require("./../main/maxPower.js");
//      Question
//         Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.
//         Return the power of the string.

describe("引数の文字列の中で連続する文字の数を返却する", () => {
  describe("maxPower(string s) を実行するとき", () => {
    test("s = leetcode を入力して2が返却されること", () => {
      expect(maxPower("leetcode")).toBe(2);
    });

    test("s = abbcccddddeeeeedcba を入力して5が返却されること", () => {
      expect(maxPower("abbcccddddeeeeedcba")).toBe(5);
    });

    test("s = triplepillooooow を入力して5が返却されること", () => {
      expect(maxPower("triplepillooooow")).toBe(5);
    });

    test("s = hooraaaaaaaaaaay を入力して11が返却されること", () => {
      expect(maxPower("hooraaaaaaaaaaay")).toBe(11);
    });

    test("s = tourist を入力して1が返却されること", () => {
      expect(maxPower("tourist")).toBe(1);
    });
  });
});

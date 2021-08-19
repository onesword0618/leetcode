const repeatedSubstringPattern = require("./../main/repeatedSubstringPattern.js");
//    Question
//       Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
//       You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

describe("引数の文字列の繰り返し利用できるかどうかを判断して返却する", () => {
  describe("repeatedSubstringPattern(string s)  を実行するとき", () => {
    test("s = abab を入力して真を返却すること", () => {
      expect(repeatedSubstringPattern("abab")).toBeTruthy();
    });

    test("s = aba を入力して偽を返却すること", () => {
      expect(repeatedSubstringPattern("aba")).toBeFalsy();
    });

    test("s = abcabcabcabc を入力して真を返却すること", () => {
      expect(repeatedSubstringPattern("abcabcabcabc")).toBeTruthy();
    });
  });
});

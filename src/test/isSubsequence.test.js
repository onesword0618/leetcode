const isSubsequence = require("./../main/isSubsequence.js");
//    Question
//       Given a string s and a string t, check if s is subsequence of t.
//       A subsequence of a string is a new string which is formed from the original string by deleting some(can be none) of the characters without disturbing
//       the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

describe("第一引数で渡した文字列を第二引数の文字列の中で抜き出して構成できるかを判定して返却する", () => {
  describe("isSubsequence(string s, string t)  を実行するとき", () => {
    test("s = abc, t = ahbgdc を入力して真を返却すること", () => {
      expect(isSubsequence("abc", "ahbgdc")).toBeTruthy();
    });

    test("s = axc, t = ahbgdc  を入力して偽を返却すること", () => {
      expect(isSubsequence("axc", "ahbgdc")).toBeFalsy();
    });
  });
});

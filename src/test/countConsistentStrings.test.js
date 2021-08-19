const countConsistentStrings = require("./../main/countConsistentStrings.js");
//    Question
//       You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
//       Return the number of consistent strings in the array words.

describe("引数のallowedが含まれる引数のwordsの配列の要素の数を返却する", () => {
  describe("countConsistentStrings(string allowed string[] words)  を実行するとき", () => {
    test("allowed = ab, words = [ad,bd,aaab,baa,badab]を引数に2が返却されること", () => {
      expect(
        countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"])
      ).toBe(2);
    });

    test("allowed = abc, words = [a,b,c,ab,ac,bc,abc]を引数に7が返却されること", () => {
      expect(
        countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
      ).toBe(7);
    });

    test("allowed = cad, words = [cc,acd,b,ba,bac,bad,ac,d]を引数に4が返却されること", () => {
      expect(
        countConsistentStrings("cad", [
          "cc",
          "acd",
          "b",
          "ba",
          "bac",
          "bad",
          "ac",
          "d",
        ])
      ).toBe(4);
    });
  });
});

const findLUSlength = require("./../main/findLUSlength.js");
//    Question
//       Given two strings, you need to find the longest uncommon subsequence of this two strings,
//       The longest uncommon subsequence is defined as the longest subsequence of one of these strings and this subsequence should not be any subsequence of the other string.
//       A subsequence is a sequence that can be derived from one sequence by deleting some characters without changing the order of the remaining elements.Trivially, any string is a subsequence of itself and an empty string is a subsequence of any string.
//      The input will be two strings, and the output needs to be the length of the longest uncommon subsequence.If the longest uncommon subsequence doesn't exist, return -1.

describe("サブシーケンスを返却する", () => {
  describe("findLUSlength(string a strign b)  を実行するとき", () => {
    test("a = aba, b = cdcを引数に3が返却されること", () => {
      expect(findLUSlength("aba", "cdc")).toBe(3);
    });

    test("a = aaa, b = bbbを引数に3が返却されること", () => {
      expect(findLUSlength("aaa", "bbb")).toBe(3);
    });

    test("a = aaa, b = aaaを引数に-1が返却されること", () => {
      expect(findLUSlength("aaa", "aaa")).toBe(-1);
    });
  });
});

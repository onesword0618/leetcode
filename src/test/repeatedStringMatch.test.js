const repeatedStringMatch = require("./../main/repeatedStringMatch.js");
//    Question
//      Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.
//      For example, with A = "abcd" and B = "cdabcdab".
//      Return 3, because by repeating A three times(“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times("abcdabcd").

describe("引数の文字列A、Bがあり、BがAの部分文字列になるようにAを繰り返す必要がある最小値を返却する", () => {
  describe("repeatedStringMatch(string A, string B)  を実行するとき", () => {
    test("A = abcd, B = cdabcdabを引数に3が返却されること", () => {
      expect(repeatedStringMatch("abcd", "cdabcdab")).toBe(3);
    });
  });
});

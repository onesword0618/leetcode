const gcdOfStrings = require("./../main/gcdOfStrings.js");
//      Question
//           For strings S and T, we say "T divides S" if and only if S = T + ... + T  (T concatenated with itself 1 or more times)
//           Return the largest string X such that X divides str1 and X divides str2.

describe("第一引数に対して第二引数で複製できる文字列を返却する", () => {
  describe("gcdOfStrings(string str1 string str2) を実行するとき", () => {
    test("str1 = ABCABC , str2 = ABCを入力してABCが返却されること", () => {
      expect(gcdOfStrings("ABCABC", "ABC")).toBe("ABC");
    });

    test("str1 = ABABAB , str2 = ABABを入力してABが返却されること", () => {
      expect(gcdOfStrings("ABABAB", "ABAB")).toBe("AB");
    });

    test("str1 = LEET , str2 = CODEを入力して''が返却されること", () => {
      expect(gcdOfStrings("LEET", "CODE")).toBe("");
    });
  });
});

const reformat = require("./../main/reformat.js");
//      Question
//           Given alphanumeric string s.(Alphanumeric string is a string consisting of lowercase English letters and digits).
//           You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit.
//           That is, no two adjacent characters have the same type.
//           Return the reformatted string or
//           return an empty string
//           if it is impossible to reformat the string.

describe("第一引数に対してフォーマットをかけた文字列を返却する", () => {
  describe("reformat(string s) を実行するとき", () => {
    test("s = a0b1c2を入力してa0b1c2が返却されること", () => {
      expect(reformat("a0b1c2")).toBe("a0b1c2");
    });

    test("s = leetcodeを入力して''が返却されること", () => {
      expect(reformat("leetcode")).toBe("");
    });

    test("s = 1229857369を入力して''が返却されること", () => {
      expect(reformat("1229857369")).toBe("");
    });

    test("s = covid2019を入力してc2o0v1i9dが返却されること", () => {
      expect(reformat("covid2019")).toBe("c2o0v1i9d");
    });

    test("s = ab123を入力して1a2b3が返却されること", () => {
      expect(reformat("ab123")).toBe("1a2b3");
    });
  });
});

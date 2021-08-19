const generateTheString = require("./../main/generateTheString");
//   Question
//      Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.
//      The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.

describe("渡した引数で奇数の文字を含む文字列を返却する", () => {
  test("4の引数を渡してaaabが返却される", () => {
    expect(generateTheString(4)).toBe("aaab");
  });

  test("2の引数を渡してabが返却される", () => {
    expect(generateTheString(2)).toBe("ab");
  });

  test("7の引数を渡してaaaaaaaが返却される", () => {
    expect(generateTheString(7)).toBe("aaaaaaa");
  });
});

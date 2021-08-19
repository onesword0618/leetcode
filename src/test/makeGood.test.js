const makeGood = require("./../main/makeGood");
//   Question
//      Given a string s of lower and upper case English letters.
//      A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:
//      - 0 <= i <= s.length - 2
//      - s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
//      To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.
//      Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

describe("渡した引数で文字列をルールに従った結果の文字列を返却する", () => {
  test("leEeetcodeの引数を渡してleetcodeが返却される", () => {
    expect(makeGood("leEeetcode")).toBe("leetcode");
  });

  test("abBAcCの引数を渡して「 」が返却される", () => {
    expect(makeGood("abBAcC")).toBe("");
  });

  test("sの引数を渡してsが返却される", () => {
    expect(makeGood("s")).toBe("s");
  });
});

const freqAlphabets = require("./../main/freqAlphabets");
//   Question
//      Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:
//      Characters ('a' to 'i') are represented by ('1' to '9') respectively.
//      Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
//      Return the string formed after mapping.
//      It's guaranteed that a unique mapping will always exist.

describe("渡した文字列の暗号を定められたルールに従って復号化して返却する。", () => {
  test("10#11#12を渡してjkabが返却される。", () => {
    expect(freqAlphabets("10#11#12")).toBe("jkab");
  });

  test("1326#を渡してaczが返却される。", () => {
    expect(freqAlphabets("1326#")).toBe("acz");
  });

  test("25#を渡してyが返却される。", () => {
    expect(freqAlphabets("25#")).toBe("y");
  });

  test("12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#を渡してabcdefghijklmnopqrstuvwxyzが返却される。", () => {
    expect(
      freqAlphabets(
        "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
      )
    ).toBe("abcdefghijklmnopqrstuvwxyz");
  });
});

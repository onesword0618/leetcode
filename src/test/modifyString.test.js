const modifyString = require("./../main/modifyString");
//      Question
//           Given a string s containing only lower case English letters and the '?' character,
//           convert all the '?' characters into lower case letters such
//           that the final string does not contain any consecutive repeating characters.
//           You cannot modify the non '?' characters.
//           It is guaranteed that there are no consecutive repeating characters in the given string except for '?'.
//           Return the final string after all the conversions (possibly zero) have been made.
//           If there is more than one solution, return any of them.
//           It can be shown that an answer is always possible with the given constraints.

describe("引数に渡した文字列の中が繰り返しが起きないように返却する", () => {
  describe('modifyString(s = "?zs") を実行するとき', () => {
    test("s = ?zsを入力してazsが返却されること", () => {
      expect(modifyString("?zs")).toBe("azs");
    });

    test("s = ubv?wを入力してubvawが返却されること", () => {
      expect(modifyString("ubv?w")).toBe("ubvaw");
    });
  });
});

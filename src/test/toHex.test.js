const toHex = require("./../main/toHex.js");
//    Question
//       Given an integer, write an algorithm to convert it to hexadecimal. For negative integer, two’s complement method is used.

describe("与えられた数字を16進数に変換して返却する", () => {
  describe("toHex(number num)  を実行するとき", () => {
    test("num = 26を引数に1aが返却されること", () => {
      expect(toHex(26)).toBe("1a");
    });

    test("num = -1を引数にffffffffが返却されること", () => {
      expect(toHex(-1)).toBe("ffffffff");
    });
  });
});

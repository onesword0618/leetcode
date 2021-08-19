const reverseStr = require("./../main/reverseStr.js");
//    Question
//      Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string.
//      If there are less than k characters left, reverse all of them.
//      If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
describe("引数の文字列を与えられた整数の2倍分ひっくり返したものを返却する", () => {
  describe("reverseStr(s = abcdefg ,k = 2)  を実行するとき", () => {
    test("s = abcdefg, k = 2を引数にbacdfegが返却されること", () => {
      expect(reverseStr("abcdefg", 2)).toBe("bacdfeg");
    });
  });
});

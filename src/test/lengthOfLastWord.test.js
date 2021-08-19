const lengthOfLastWord = require("./../main/lengthOfLastWord");
//    Question
//        Given a string s consists of upper / lower -case alphabets and empty space characters ' ',
//        return the length of last word(last word means the last appearing word if we loop from left to right) in the string.
//        If the last word does not exist, return 0.

describe("引数に渡した文字列の最後の単語の数を返却する", () => {
  describe("lengthOfLastWord の結果が1以上を返却するとき", () => {
    test("Hello Worldを入力して5が返却されること", () => {
      expect(lengthOfLastWord("Hello World")).toBe(5);
    });

    test("Take Careを入力して4が返却されること", () => {
      expect(lengthOfLastWord("Take Care")).toBe(4);
    });
  });

  describe("lengthOfLastWord の結果が0以上を返却するとき", () => {
    test("空文字を入力して0が返却されること", () => {
      expect(lengthOfLastWord("")).toBe(0);
    });
  });
});

const longestWord = require("./../main/longestWord");
//    Question
//        Given a list of strings words representing an English Dictionary,
//        find the longest word in words that can be built one character at a time by other words in words.
//        If there is more than one possible answer, return the longest word with the smallest lexicographical order.
//        If there is no answer, return the empty string.

describe("引数に渡した文字列の配列で一番辞書的に長い単語を返却する \n 回答がない場合は空文字を返却する", () => {
  describe("longestWord が成功するとき", () => {
    test("[w,wo,wor,worl, world]を入力してworldが返却されること", () => {
      expect(longestWord(["w", "wo", "wor", "worl", "world"])).toBe("world");
    });

    test("[a,banana,app,appl,ap,apply,apple]を入力してappleが返却されること", () => {
      expect(
        longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"])
      ).toBe("apple");
    });
  });

  describe("longestWord が失敗するとき", () => {
    test('["","","",""]を入力して空文字が返却されること', () => {
      expect(longestWord(["", "", "", ""])).toBe("");
    });
  });
});

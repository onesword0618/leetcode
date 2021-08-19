const wordPattern = require("./../main/wordPattern");
//    Question
//        Given a pattern and a string str, find if str follows the same pattern.
//        Here follow means a full match,
//        such that there is a bijection between a letter in pattern and a non - empty word in str.

describe("引数に渡したパターンに文字列が従っているかを調査する", () => {
  describe("wordPattern の結果が成功するとき", () => {
    test("abbaのパターンとdog cat cat dogを入力して成功すること", () => {
      expect(wordPattern("abba", "dog cat cat dog")).toBeTruthy();
    });

    test("bbbのパターンとsuger suger sugerを入力して成功すること", () => {
      expect(wordPattern("bbb", "suger suger suger")).toBeTruthy();
    });

    test("cbcのパターンとsuger cake sugerを入力して成功すること", () => {
      expect(wordPattern("cbc", "suger cake suger")).toBeTruthy();
    });
  });

  describe("wordPattern の結果が失敗するとき", () => {
    test("abbaのパターンとdog cat cat fishを入力して成功すること", () => {
      expect(wordPattern("abba", "dog cat cat fish")).toBeFalsy();
    });

    test("aaaaのパターンとdog cat cat dogを入力して成功すること", () => {
      expect(wordPattern("aaaa", "dog cat cat fish")).toBeFalsy();
    });

    test("aaaaのパターンとdog cat cat dogを入力して成功すること", () => {
      expect(wordPattern("aaaa", "dog cat cat fish")).toBeFalsy();
    });

    test("abbaのパターンとdog cat cat dogを入力して成功すること", () => {
      expect(wordPattern("abba", "dog dog dog dog")).toBeFalsy();
    });
  });
});

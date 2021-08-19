const maxRepeating = require("./../main/maxRepeating");
//      Question
//        For a string sequence, a string word is k-repeating
//        if word concatenated k times is a substring of sequence.
//        The word's maximum k-repeating value is the highest value k where word is k-repeating in sequence. If word is not a substring of sequence, word's maximum k-repeating value is 0.
//        Given strings sequence and word, return the maximum k-repeating value of word in sequence.

describe("文字列をある単語がいくつ繰り返し出現したかその数を返却する", () => {
  describe("maxRepeating(string sequence, string word) を実行するとき", () => {
    test("sequence = ababc, word = ab を入力して2が返却されること", () => {
      expect(maxRepeating("ababc", "ab")).toBe(2);
    });

    test("sequence = ababc, word = ba を入力して1が返却されること", () => {
      expect(maxRepeating("ababc", "ba")).toBe(1);
    });

    test("sequence = ababc, word = ac を入力して0が返却されること", () => {
      expect(maxRepeating("ababc", "ac")).toBe(0);
    });
  });
});

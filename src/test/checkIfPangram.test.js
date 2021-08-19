const checkIfPangram = require("./../main/checkIfPangram");
//   Question
//      A pangram is a sentence where every letter of the English alphabet appears at least once.
//      Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

describe("アルファベットが全て含まれているかどうかの結果を返却する", () => {
  describe("checkIfPangram (string sentence) を実行するとき", () => {
    test("sentence = thequickbrownfoxjumpsoverthelazydog を入力して true が返却されること", () => {
      expect(
        checkIfPangram(`thequickbrownfoxjumpsoverthelazydog`)
      ).toBeTruthy();
    });

    test("sentence = leetcode を入力して false が返却されること", () => {
      expect(checkIfPangram(`leetcode`)).toBeFalsy();
    });
  });
});

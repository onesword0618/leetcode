const countLargestGroup = require("./../main/countLargestGroup.js");
//      Question
//          Given an integer n. Each number from 1 to n is grouped according to the sum of its digits.

describe("引数の値を1からnの数のグループの最大値を返却する", () => {
  describe("countLargestGroup(number n) を実行するとき", () => {
    test("n = 13 を入力して4が返却されること", () => {
      expect(countLargestGroup(13)).toBe(4);
    });

    test("n = 2 を入力して2が返却されること", () => {
      expect(countLargestGroup(2)).toBe(2);
    });

    test("n = 15 を入力して6が返却されること", () => {
      expect(countLargestGroup(15)).toBe(6);
    });

    test("n = 24 を入力して5が返却されること", () => {
      expect(countLargestGroup(24)).toBe(5);
    });
  });
});

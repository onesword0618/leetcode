const isPalindrome = require("./../main/isPalindrome.js");
//   Question
//      Determine whether an integer is a palindrome.
//      An integer is a palindrome when it reads the same backward as forward.

describe("引数の整数が回文になるかどうか判定する", () => {
  describe("isPalindrome(nums)が実行されたとき", () => {
    describe("isPalindrome(nums)が真の場合", () => {
      test("number = 121の場合、回文であること", () => {
        expect(isPalindrome(121)).toBeTruthy();
      });

      describe("isPalindrome(nums)が偽の場合", () => {
        test("number = -121の場合、回文でないこと", () => {
          expect(isPalindrome(-121)).toBeFalsy();
        });

        test("number = 10の場合、回文でないこと", () => {
          expect(isPalindrome(10)).toBeFalsy();
        });
      });
    });
  });
});

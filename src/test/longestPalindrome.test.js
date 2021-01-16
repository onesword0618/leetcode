const longestPalindrome = require('./../main/longestPalindrome.js');
//    Question
//     Given a string s which consists of lowercase or uppercase letters,
//     return the length of the longest palindrome that can be built with those letters.
//     Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

describe('引数で渡した文字列で構成できる最大の長さの回文を返却する', () => {
 describe('longestPalindrome(string s) を実行するとき', () => {
  test('s = abccccddを引数に7が返却されること', () => {
   expect(longestPalindrome('abccccdd')).toBe(7);
  });

  test('s = aを引数に1が返却されること', () => {
   expect(longestPalindrome('a')).toBe(1);
  });

  test('s = bbを引数に2が返却されること', () => {
   expect(longestPalindrome('bb')).toBe(2);
  });
 });
});
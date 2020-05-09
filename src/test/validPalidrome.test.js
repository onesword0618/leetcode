const validPalindrome = require('./../main/validPalindrome.js');
//   Question
//      Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

describe('引数の文字列が回文になるかどうか判定する', () => {

    describe('validPalindrome(s)が実行されたとき', () => {

        describe('validPalindrome(s)が真の場合', () => {

            test('s = A man, a plan, a canal: Panamaの場合、真であること', () => {
                expect(validPalindrome('A man, a plan, a canal: Panama')).toBeTruthy();
            });

            describe('validPalindrome(nums)が偽の場合', () => {

                test('s = race a carの場合、偽である    こと', () => {
                    expect(validPalindrome('race a car')).toBeFalsy();
                });
            });
        });
    });
});
const isPalindrome = require('./../main/isPalindrome');

describe('与えられた数値が回文になるかどうか', () => {

    test('121は回文になる数値である', () => {
        expect(isPalindrome(121)).toBeTruthy();
    });

    test('-121は回文になる数値でない', () => {
        expect(isPalindrome(-121)).toBeFalsy();
    });

    test('10は回文になる数値でない', () => {
        expect(isPalindrome(10)).toBeFalsy();
    });

});
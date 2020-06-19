const validPalindrome3 = require('./../main/validPalindrome3.js');
//    Question
//   Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
describe('最大1文字削ることで、回文が成立するかを判断して返却する', () => {

    describe('validPalindrome3(string s)  を実行するとき', () => {
        test('s = abaを入力して真を返却すること', () => {
            expect(validPalindrome3('aba')).toBeTruthy();
        });

        test('s = abcaを入力して真を返却すること', () => {
            expect(validPalindrome3('abca')).toBeTruthy();
        });
    });
});
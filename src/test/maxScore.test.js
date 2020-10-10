const maxScore = require('./../main/maxScore');
//   Question
//      Given a string s of zeros and ones,
//      return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).
//      The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

describe('渡した引数の文字列を1と0で分けたときの加算した数の最大数を返却する', () => {

    test('011101の引数を渡して5が返却される', () => {
        expect(maxScore('011101')).toBe(5);
    });

    test('00111の引数を渡して5が返却される', () => {
        expect(maxScore('00111')).toBe(5);
    });

    test('1111の引数を渡して3が返却される', () => {
        expect(maxScore('1111')).toBe(3);
    });
});
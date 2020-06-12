const buddyStrings = require('./../main/buddyStrings.js');
//    Question
//    Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.

describe('引数で配列の数を1ビット、2ビットで表せるかどうか判断して返却する', () => {

    describe('buddyStrings(number[] bits)  を実行するとき', () => {
        test('A = ab, B= ba を入力して真を返却すること', () => {
            expect(buddyStrings('ab', 'ba')).toBeTruthy();
        });

        test('A = ab, B= ab を入力して真を返却すること', () => {
            expect(buddyStrings('ab', 'ab')).toBeFalsy();
        });

        test('A = aa, B= aa を入力して真を返却すること', () => {
            expect(buddyStrings('aa', 'aa')).toBeTruthy();
        });

        test('A = aaaaaaabc, B= aaaaaaacb を入力して真を返却すること', () => {
            expect(buddyStrings('aaaaaaabc', 'aaaaaaacb')).toBeTruthy();
        });

        test('A = , B= aa を入力して真を返却すること', () => {
            expect(buddyStrings('', 'aa')).toBeFalsy();
        });
    });
});
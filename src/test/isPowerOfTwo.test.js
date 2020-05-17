const isPowerOfTwo = require('./../main/isPowerOfTwo.js');
//    Question
//       Given an integer, write a function to determine if it is a power of two.

describe('引数で渡した値が2のべき乗かどうか判断して返却する', () => {

    describe('isPowerOfTwo(number num)  を実行するとき', () => {
        test('num =1 を入力して真を返却すること', () => {
            expect(isPowerOfTwo(1)).toBeTruthy();
        });

        test('num =16 を入力して真を返却すること', () => {
            expect(isPowerOfTwo(16)).toBeTruthy();
        });

        test('num =218 を入力して偽を返却すること', () => {
            expect(isPowerOfTwo(218)).toBeFalsy();
        });
    });
});
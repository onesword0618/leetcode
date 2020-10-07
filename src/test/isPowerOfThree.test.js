const isPowerOfThree = require('./../main/isPowerOfThree');
//    Question
//       Given an integer, write a function to determine if it is a power of three.

describe('引数の数字が3の累乗であるかを判断して返却する', () => {

    describe('isPowerOfThree(number n)  を実行するとき', () => {
        test('n = 27を入力して真を返却すること', () => {
            expect(isPowerOfThree(27)).toBeTruthy();
        });

        test('n = 0を入力して偽を返却すること', () => {
            expect(isPowerOfThree(0)).toBeFalsy();
        });

        test('n = 9を入力して真を返却すること', () => {
            expect(isPowerOfThree(9)).toBeTruthy();
        });

        test('n = 45を入力して偽を返却すること', () => {
            expect(isPowerOfThree(45)).toBeFalsy();
        });
    });
});
const checkPerfectNumber = require('./../main/checkPerfectNumber');
//    Question
//        We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.
//        Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.

describe('引数に渡した数が完全数かどうかを判定する', () => {

    describe('checkPerfectNumber の結果が成功するとき', () => {

        test('28を入力して成功すること', () => {
            expect(checkPerfectNumber(28)).toBeTruthy();
        });

        test('6を入力して成功すること', () => {
            expect(checkPerfectNumber(6)).toBeTruthy();
        });

        test('496を入力して成功すること', () => {
            expect(checkPerfectNumber(496)).toBeTruthy();
        });
    });

    describe('checkPerfectNumber の結果が失敗するとき', () => {

        test('5を入力して失敗すること', () => {
            expect(checkPerfectNumber(5)).toBeFalsy();
        });

        test('1を入力して失敗すること', () => {
            expect(checkPerfectNumber(1)).toBeFalsy();
        });

        test('31を入力して失敗すること', () => {
            expect(checkPerfectNumber(31)).toBeFalsy();
        });
    });
});
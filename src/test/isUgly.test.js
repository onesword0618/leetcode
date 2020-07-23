const isUgly = require('./../main/isUgly.js');
//    Question
//       Write a program to check whether a given number is an ugly number.
//       Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

describe('2,3,5の素因数のみが含まれているかどうかを判断して返却する', () => {

    describe('isUgly(number num)  を実行するとき', () => {
        test('num = 6を入力して真を返却すること', () => {
            expect(isUgly(6)).toBeTruthy();
        });

        test('num = 8を入力して真を返却すること', () => {
            expect(isUgly(8)).toBeTruthy();
        });

        test('num = 14を入力して偽を返却すること', () => {
            expect(isUgly(14)).toBeFalsy();
        });
    });
});
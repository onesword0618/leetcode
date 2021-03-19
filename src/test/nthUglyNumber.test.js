const nthUglyNumber = require('./../main/nthUglyNumber.js');
//      Question
//           Given an integer n, return the nth ugly number.
//           Ugly number is a positive number whose prime factors only include 2, 3, and/or 5.

describe('素因数のみ含む正の数を返却する', () => {

    describe('nthUglyNumber(number n) を実行するとき', () => {

        test('n = 10 を入力して12が返却されること', () => {
            expect(nthUglyNumber(10)).toBe(12);
        });

        test('n = 1 を入力して1が返却されること', () => {
            expect(nthUglyNumber(1)).toBe(1);
        });
    });
});
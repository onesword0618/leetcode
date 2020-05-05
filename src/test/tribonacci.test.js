const tribonacci = require('./../main/tribonacci.js');
//      Question
//          The Tribonacci sequence Tn is defined as follows:
//          T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
//          Given n, return the value of Tn.

describe('トリボナッチ数列を導出して指定された数を返却する', () => {

    describe('tribonacci(number n) を実行するとき', () => {

        test('n = 4 を入力して4が返却されること', () => {
            expect(tribonacci(4)).toBe(4);
        });

        test('n = 25 を入力して1389537が返却されること', () => {
            expect(tribonacci(25)).toBe(1389537);
        });
    });
});
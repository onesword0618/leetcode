const trailingZeroes = require('./../main/trailingZeroes.js');
//      Question
//          Given an integer n, return the number of trailing zeroes in n!.

describe('後続ゼロの数を返却する', () => {

    describe('trailingZeroes(number n) を実行するとき', () => {

        test('n = 3 を入力して0が返却されること', () => {
            expect(trailingZeroes(3)).toBe(0);
        });

        test('n = 5 を入力して1が返却されること', () => {
            expect(trailingZeroes(5)).toBe(1);
        });
    });
});
const numPrimeArrangements = require('./../main/numPrimeArrangements.js');
//    Question
//      Return the number of permutations of 1 to n so that prime numbers are at prime indices (1-indexed.)
//      (Recall that an integer is prime if and only if it is greater than 1, and cannot be written as a product of two positive integers both smaller than it.)
//      Since the answer may be large, return the answer modulo 10 ^ 9 + 7.

describe('引数の数値を素数と素数インデックスが一致する数を返却する', () => {
    describe('numPrimeArrangements(number n)  を実行するとき', () => {
        test('n = 5を引数に12が返却されること', () => {
            expect(numPrimeArrangements(5)).toBe(12n);
        });

        test('n = 100を引数に682289015が返却されること', () => {
            expect(numPrimeArrangements(100)).toBe(682289015n);
        });
    });
});
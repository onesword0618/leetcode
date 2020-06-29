const prefixesDivBy5 = require('./../main/prefixesDivBy5.js');
//    Question
//      Given an array A of 0s and 1s, consider N_i: the i-th subarray from A[0] to A[i] interpreted as a binary number (from most-significant-bit to least-significant-bit.)
//      Return a list of booleans answer, where answer[i] is true if and only if N_i is divisible by 5.

describe('引数の配列をバイナリにしたときに5で割り切れるかどうかの判定値の配列を返却する', () => {

    describe('prefixesDivBy5(number[] A)  を実行するとき', () => {
        test('A = [0,1,1]を引数に[true,false,false]が返却されること', () => {
            expect(prefixesDivBy5([0, 1, 1])).toEqual(expect.arrayContaining([true, false, false]));
        });

        test('A = [0, 1, 1]を引数に[true,false,false]が返却されること', () => {
            expect(prefixesDivBy5([0, 1, 1])).toEqual(expect.arrayContaining([false, false, false]));
        });

        test('A = [0,1,1,1,1,1]を引数に[true,false,false]が返却されること', () => {
            expect(prefixesDivBy5([0, 1, 1, 1, 1, 1])).toEqual(expect.arrayContaining([true, false, false, false, true, false]));
        });

        test('A = [1,1,1,0,1]を引数に[false,false,false,false,false]が返却されること', () => {
            expect(prefixesDivBy5([1, 1, 1, 0, 1])).toEqual(expect.arrayContaining([false, false, false, false, false]));
        });

    });
});
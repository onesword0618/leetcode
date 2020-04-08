const binaryGap = require('./../main/binaryGap.js');
//      Question
//        Given a positive integer N, find and return
//        the longest distance between two consecutive 1's in the binary representation of N.
//        If there aren't two consecutive 1's, return 0.

describe('正の数値から2つの連続したバイナリ表現の最長距離を返却する \n 見つからない場合は0を返却する', () => {

    describe('binaryGap(number) を実行するとき', () => {

        test('number = 22 を入力して2が返却されること', () => {
            expect(binaryGap(22)).toBe(2);
        });

        test('number = 5 を入力して2が返却されること', () => {
            expect(binaryGap(5)).toBe(2);
        });

        test('number = 6 を入力して1が返却されること', () => {
            expect(binaryGap(6)).toBe(1);
        });

        test('number = 8 を入力して0が返却されること', () => {
            expect(binaryGap(8)).toBe(0);
        });
    });
});
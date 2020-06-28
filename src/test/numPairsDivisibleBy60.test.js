const numPairsDivisibleBy60 = require('./../main/numPairsDivisibleBy60.js');
//    Question
//       In a list of songs, the i-th song has a duration of time[i] seconds.
//       Return the number of pairs of songs for which their total duration in seconds is divisible by 60.
//       Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

describe('引数の配列を曲時間に見立ててペアの合計時間を60で割れる数を返却する', () => {
    describe('numPairsDivisibleBy60(number[] time)  を実行するとき', () => {
        test('time = [30,20,150,100,40]を引数に3が返却されること', () => {
            expect(numPairsDivisibleBy60([30, 20, 150, 100, 40])).toBe(3);
        });

        test('time = [60,60,60]を引数に3が返却されること', () => {
            expect(numPairsDivisibleBy60([60, 60, 60])).toBe(3);
        });
    });
});
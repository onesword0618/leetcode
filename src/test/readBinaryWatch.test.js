const readBinaryWatch = require('./../main/readBinaryWatch.js');
//    Question
//      A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).
//      Each LED represents a zero or one, with the least significant bit on the right.
//      For example, the above binary watch reads "3:25".
//      Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.

describe('引数の数を指定して時計が表示する可能性のあるもの全て配列になるように配列を返却する', () => {

    describe('readBinaryWatch(number n)  を実行するとき', () => {
        test('n = 1を引数に[1:00, 2:00, 4:00, 8:00, 0:01, 0:02, 0:04, 0:08, 0:16, 0:32]が返却されること', () => {
            expect(readBinaryWatch(1)).toEqual(expect.arrayContaining(['1:00', '2:00', '4:00', '8:00', '0:01', '0:02', '0:04', '0:08', '0:16', '0:32']));
        });
    });
});
const maxLengthBetweenEqualCharacters = require('./../main/maxLengthBetweenEqualCharacters');
//      Question
//           Given a string s, return the length of the longest substring between two equal characters,
//           excluding the two characters. If there is no such substring return -1.
//           A substring is a contiguous sequence of characters within a string.

describe('引数に渡した文字列の中で同じ文字の距離を返却する', () => {

    describe('maxLengthBetweenEqualCharacters(string s) を実行するとき', () => {

        test('s = aaを入力して0が返却されること', () => {
            expect(maxLengthBetweenEqualCharacters('aa')).toBe(0);
        });

        test('s = abcaを入力して2が返却されること', () => {
            expect(maxLengthBetweenEqualCharacters('abca')).toBe(2);
        });

        test('s = cbzxyを入力して-1が返却されること', () => {
            expect(maxLengthBetweenEqualCharacters('cbzxy')).toBe(-1);
        });

        test('s = cabbacを入力して4が返却されること', () => {
            expect(maxLengthBetweenEqualCharacters('cabbac')).toBe(4);
        });
    });
});
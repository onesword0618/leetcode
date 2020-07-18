const countSegments = require('./../main/countSegments.js');
//    Question
//       Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.
//       Please note that the string does not contain any non - printable characters.

describe('文字のセグメント数を返却する', () => {
    describe('countSegments(string s)  を実行するとき', () => {
        test('s = Hello, my name is Johnを引数に5が返却されること', () => {
            expect(countSegments('Hello, my name is John')).toBe(5);
        });
    });
});
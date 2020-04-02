const strStr = require('./../main/strStr.js');
//    Question
//        Implement strStr().
//        Return the index of the first occurrence of needle in haystack,
//        or -1 if needle is not part of haystack.

describe('引数の文字列に対して第二引数の文字が最初に見つかった要素を返却する \n 見つからない場合は-1を返却する', () => {

    describe('strStr(string) haystack,(string) needle を実行するとき', () => {

        test('haystack = hello, needle = ll を入力して2が返却されること', () => {
            expect(strStr('hello', 'll')).toBe(2);
        });

        test('haystack = aaaaa, needle = bba を入力して-1が返却されること', () => {
            expect(strStr('aaaaa', 'bba')).toBe(-1);
        });
    });
});
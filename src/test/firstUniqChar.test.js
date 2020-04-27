const firstUniqChar = require('./../main/firstUniqChar.js');
//      Question
//           Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

describe('引数の文字列で繰り返しのない文字を見つけその要素位置を返却する', () => {

    describe('firstUniqChar(string s) を実行するとき', () => {

        test('s= leetcodeを入力して0が返却されること', () => {
            expect(firstUniqChar('leetcode')).toEqual(0);
        });

        test('s= loveleetcodeを入力して0が返却されること', () => {
            expect(firstUniqChar('loveleetcode')).toEqual(2);
        });
    });
});
const isAnagram = require('./../main/isAnagram.js');
//      Question
//         Given two strings s and t , write a function to determine if t is an anagram of s.

describe('引数がアナグラムかどうかを判定して返却する', () => {

    describe('isAnagram(string s, string t) を実行するとき', () => {

        test('s = anagram, t = nagaramを入力して真が返却すること', () => {
            expect(isAnagram('anagram', 'nagaram')).toBeTruthy();
        });

        test('s = rat, t =carを入力して偽が返却すること', () => {
            expect(isAnagram('rat', 'car')).toBeFalsy();
        });
    });
});
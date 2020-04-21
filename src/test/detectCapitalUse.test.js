const detectCapitalUse = require('./../main/detectCapitalUse.js');
//      Question
//           Given a word, you need to judge whether the usage of capitals in it is right or not.
//           We define the usage of capitals in a word to be right when one of the following cases holds:
//           1. All letters in this word are capitals, like "USA".
//           2. All letters in this word are not capitals, like "leetcode".
//           3. Only the first letter in this word is capital, like "Google".
//           Otherwise, we define that this word doesn't use capitals in a right way.

describe('第一引数の文字列が全て大文字か、全て小文字か、最初の文字が大文字であるかの判定を返却する', () => {

    describe('detectCapitalUse(string word) を実行するとき', () => {

        test('word = USAを入力して真が返却されること', () => {
            expect(detectCapitalUse('USA')).toBeTruthy();
        });

        test('word = FlaGを入力して偽が返却されること', () => {
            expect(detectCapitalUse('FlaG')).toBeFalsy();
        });
    });
});
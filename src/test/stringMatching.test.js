const stringMatching = require('./../main/stringMatching');
//      Question
//           Given an array of string words. Return all strings in words which is substring of another word in any order. 
//           String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

describe('配列の文字列を照合した結果の配列を返却する', () => {

    describe('stringMatching(string[] words) を実行するとき', () => {

        test('words = ["mass","as","hero","superhero"]を入力して["as","hero"]が返却されること', () => {
            expect(stringMatching(['mass', 'as', 'hero', 'superhero'])).toEqual(expect.arrayContaining(['as', 'hero']));
        });

        test('words = ["leetcode","et","code"]を入力して["et","code"]が返却されること', () => {
            expect(stringMatching(['leetcode', 'et', 'code'])).toEqual(expect.arrayContaining(['et', 'code']));
        });

        test('words = ["blue","green","bu"]を入力して[]が返却されること', () => {
            expect(stringMatching(['blue', 'green', 'bu'])).toEqual(expect.arrayContaining([]));
        });
    });
});
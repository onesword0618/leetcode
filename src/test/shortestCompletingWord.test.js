const shortestCompletingWord = require('./../main/shortestCompletingWord.js');
//      Question
//        Find the minimum length word from a given dictionary words,
//        which has all the letters from the string licensePlate.
//        Such a word is said to complete the given string licensePlate
//        Here, for letters we ignore case.
//        For example, "P" on the licensePlate still matches "p" on the word.
//        It is guaranteed an answer exists. If there are multiple answers,
//        return the one that occurs first in the array.
//        The license plate might have the same letter occurring multiple times.
//        For example, given a licensePlate of "PP", the word "pair" does not complete the licensePlate, but the word "supper" does.

describe('第一引数の文字列を利用して第二引数の文字列の配列の要素で共通する単語を返却する', () => {

    describe('shortestCompletingWord(string licensePlate, string[] words) を実行するとき', () => {

        test('licensePlate =1s3 PSt, words = [step, steps, stripe, stepple] を入力して\'steps\'が返却されること', () => {
            expect(shortestCompletingWord('1s3 PSt', ['step', 'steps', 'stripe, stepple'])).toBe('steps');
        });

        test('licensePlate =1s3 456, words = [looks, pest, stew, show] を入力して\'pest\'が返却されること', () => {
            expect(shortestCompletingWord('1s3 456', ['looks', 'pest', 'stew, show'])).toBe('pest');
        });
    });
});
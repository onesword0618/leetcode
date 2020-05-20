const nextGreatestLetter = require('./../main/nextGreatestLetter.js');
//      Question
//          Given a list of sorted characters letters containing only lowercase letters, and given a target letter target,
//          find the smallest element in the list that is larger than the given target.

describe('引数の文字列の配列から引数の指定の文字より最小の文字を導出した結果を返却する', () => {

    describe('nextGreatestLetter(character[] letters , character target) を実行するとき', () => {

        test('letters = [c, f, j], target = a を入力してcが返却されること', () => {
            expect(nextGreatestLetter(['c', 'f', 'j'], 'a')).toBe('c');
        });

        test('letters = [c, f, j], target = c を入力してfが返却されること', () => {
            expect(nextGreatestLetter(['c', 'f', 'j'], 'c')).toBe('f');
        });

        test('letters = [c, f, j], target = d を入力してfが返却されること', () => {
            expect(nextGreatestLetter(['c', 'f', 'j'], 'd')).toBe('f');
        });

        test('letters = [c, f, j], target = g を入力してjが返却されること', () => {
            expect(nextGreatestLetter(['c', 'f', 'j'], 'g')).toBe('j');
        });

        test('letters = [c, f, j], target = j を入力してcが返却されること', () => {
            expect(nextGreatestLetter(['c', 'f', 'j'], 'j')).toBe('c');
        });

        test('letters = [c, f, j], target = k を入力してcが返却されること', () => {
            expect(nextGreatestLetter(['c', 'f', 'j'], 'k')).toBe('c');
        });

    });
});
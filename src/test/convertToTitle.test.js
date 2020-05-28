const convertToTitle = require('./../main/convertToTitle.js');
//      Question
//          Given a positive integer, return its corresponding column title as appear in an Excel sheet.

describe('Excelシートの列タイトルを導出した結果を返却する', () => {

    describe('convertToTitle(number n) を実行するとき', () => {

        test('n = 1 を入力してAが返却されること', () => {
            expect(convertToTitle(1)).toBe('A');
        });

        test('n = 28 を入力してABが返却されること', () => {
            expect(convertToTitle(28)).toBe('AB');
        });

        test('n = 701 を入力してZYが返却されること', () => {
            expect(convertToTitle(701)).toBe('ZY');
        });

    });
});
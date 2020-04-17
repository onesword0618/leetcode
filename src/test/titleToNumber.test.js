const titleToNumber = require('./../main/titleToNumber.js');
//      Question
//           Given a column title as appear in an Excel sheet, return its corresponding column number.

describe('Excelシートに表示される列タイトルを指定してその列番号を返却する', () => {

    describe('titleToNumber(string s) を実行するとき', () => {

        test('string = A を入力して1が返却されること', () => {
            expect(titleToNumber('A')).toBe(1);
        });

        test('string = AB を入力して28が返却されること', () => {
            expect(titleToNumber('AB')).toBe(28);
        });

        test('string = ZY を入力して701が返却されること', () => {
            expect(titleToNumber('ZY')).toBe(701);
        });
    });
});
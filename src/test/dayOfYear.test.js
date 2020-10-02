const dayOfYear = require('./../main/dayOfYear');
//   Question
//      Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

describe('渡した引数の日付の文字列から日番号を返却する', () => {

    test('2019-01-09の引数を渡して9が返却される', () => {
        expect(dayOfYear('2019-01-09')).toBe(9);
    });

    test('2019-02-10の引数を渡して41が返却される', () => {
        expect(dayOfYear('2019-02-10')).toBe(41);
    });

    test('2003-03-01の引数を渡して60が返却される', () => {
        expect(dayOfYear('2003-03-01')).toBe(60);
    });

    test('2004-03-01の引数を渡して61が返却される', () => {
        expect(dayOfYear('2004-03-01')).toBe(61);
    });
});
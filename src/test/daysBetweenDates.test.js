const balancedStringSplit = require('./../main/daysBetweenDates');
// Question
//     Write a program to count the number of days between two dates.
//     The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.

describe('引数の日付の間の日数を求めて返却する', () => {

    test('2019-06-29と2019-06-30の間が1であること', () => {
        expect(balancedStringSplit('2019-06-29','2019-06-30')).toBe(1);
    });

    test('2020-01-15と2019-12-31の間が15であること', () => {
        expect(balancedStringSplit('2020-01-15','2019-12-31')).toBe(15);
    });
});
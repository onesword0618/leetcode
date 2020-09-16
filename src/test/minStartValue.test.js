const minStartValue = require('./../main/minStartValue');
//   Question
//      Given an array of integers nums, you start with an initial positive value startValue.
//      In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).
//      Return the minimum positive value of startValue such that the step by step sum is never less than 1.

describe('渡した引数で配列を合計して正の数になったときの値を返却する', () => {

    test('[-3,2,-3,4,2]の引数を渡して5が返却される', () => {
        expect(minStartValue([-3, 2, -3, 4, 2])).toBe(5);
    });

    test('[1,2]の引数を渡して1が返却される', () => {
        expect(minStartValue([1, 2])).toBe(1);
    });

    test('[1,-2,-3]の引数を渡して5が返却される', () => {
        expect(minStartValue([1, -2, -3])).toBe(5);
    });
});
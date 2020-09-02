const countOdds = require('./../main/countOdds');
//   Question
//      Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

describe('渡した引数の数の間の奇数の数を返却する', () => {

    test('3,7の引数を渡して3が返却される', () => {
        expect(countOdds(3,7)).toBe(3);
    });

    test('8,10の引数を渡して1が返却される', () => {
        expect(countOdds(8,10)).toBe(1);
    });
});
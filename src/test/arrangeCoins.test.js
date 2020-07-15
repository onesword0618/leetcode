const arrangeCoins = require('./../main/arrangeCoins.js');
//    Question
//       You have a total of n coins that you want to form in a staircase shape, where every k - th row must have exactly k coins.
//       Given n, find the total number of full staircase rows that can be formed.
//       n is a non - negative integer and fits within the range of a 32 - bit signed integer.

describe('コインを階段状にした場合に完全にできる段は何段かを返却する', () => {
    describe('arrangeCoins(number n)  を実行するとき', () => {
        test('n = 5を引数に2が返却されること', () => {
            expect(arrangeCoins(5)).toBe(2);
        });

        test('n = 8を引数に3が返却されること', () => {
            expect(arrangeCoins(8)).toBe(3);
        });
    });
});
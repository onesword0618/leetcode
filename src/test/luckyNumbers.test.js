const luckyNumbers = require('./../main/luckyNumbers.js');
//      Question
//           Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.
//           A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

describe('マトリックス内のラッキーナンバーを返却する', () => {

    describe('luckyNumbers(number[][] matrix) を実行するとき', () => {

        test('matrix = [[3,7,8],[9,11,13],[15,16,17]]を入力して[15]が返却されること', () => {
            expect(luckyNumbers([[3, 7, 8], [9, 11, 13], [15, 16, 17]])).toEqual(expect.arrayContaining([15]));
        });

        test('numbers = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]を入力して[12]が返却されること', () => {
            expect(luckyNumbers([[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]])).toEqual(expect.arrayContaining([12]));
        });

        test('numbers = [[7,8],[1,2]]を入力して[7]が返却されること', () => {
            expect(luckyNumbers([[7, 8], [1, 2]])).toEqual(expect.arrayContaining([7]));
        });
    });
});
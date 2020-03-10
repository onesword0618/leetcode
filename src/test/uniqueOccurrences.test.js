const uniqueOccurrences = require('./../main/uniqueOccurrences');
//    Question
//        Given an array of integers arr, write a function that returns true
//        if and only if the number of occurrences of each value in the array is unique.

describe('引数に渡した数の出現回数がユニークかどうかを判定する', () => {

    describe('uniqueOccurrences の結果が成功するとき', () => {

        test('[1,2,2,1,2,3]を入力して成功すること', () => {
            expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toBeTruthy();
        });

        test('[-3,0,1,-3,1,1,1,-3,10,0]を入力して成功すること', () => {
            expect(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])).toBeTruthy();
        });
    });

    describe('uniqueOccurrences の結果が失敗するとき', () => {

        test('[1,2]を入力して失敗すること', () => {
            expect(uniqueOccurrences([1, 2])).toBeFalsy();
        });

        test('[1,1,2,2]を入力して失敗すること', () => {
            expect(uniqueOccurrences([1, 1, 2, 2])).toBeFalsy();
        });
    });
});
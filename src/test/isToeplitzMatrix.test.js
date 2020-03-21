const isToeplitzMatrix = require('./../main/isToeplitzMatrix.js');
//    Question
//        A matrix is Toeplitz if every diagonal from top - left to bottom - right has the same element.
//        Now given an M x N matrix, return True if and only if the matrix is Toeplitz.

describe('引数の配列の左上から右下までの対角線が同じ値で構成されているかを判定する', () => {

    describe('isToeplitzMatrix(matrix)が実行されたとき', () => {

        describe('isToeplitzMatrix(matrix)が真の場合', () => {

            test('matrix = [1,2,3,4],[5, 1, 2, 3],[9, 5, 1, 2]の場合、テプリッツ行列であること', () => {
                expect(isToeplitzMatrix([
                    [1, 2, 3, 4],
                    [5, 1, 2, 3],
                    [9, 5, 1, 2]
                ])).toBeTruthy();
            });
        });

        describe('isToeplitzMatrix(matrix)が偽の場合', () => {

            test('matrix = [1,2],[2,2]の場合、テプリッツ行列でないこと', () => {
                expect(isToeplitzMatrix([
                    [1, 2],
                    [2, 2]
                ])).toBeFalsy();
            });
        });
    });
});
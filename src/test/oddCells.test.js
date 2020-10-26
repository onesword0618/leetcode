const oddCells = require('./../main/oddCells');
//   Question
//      Given n and m which are the dimensions of a matrix initialized by zeros and given an array indices where indices[i] = [ri, ci]. For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.
//      Return the number of cells with odd values in the matrix after applying the increment to all indices.

describe('渡した引数の配列から行列内の奇数のセルを返却する', () => {

    test('2,3,[[0,1],[1,1]]の引数を渡して6が返却される', () => {
        expect(oddCells(2, 3, [[0, 1], [1, 1]])).toBe(6);
    });

    test('2,2,[[1,1],[0,0]]の引数を渡して0が返却される', () => {
        expect(oddCells(2, 2, [[1, 1], [0, 0]])).toBe(0);
    });
});
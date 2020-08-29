const shiftGrid = require('./../main/shiftGrid');
//   Question
//      Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.
//      In one shift operation:
//      Element at grid[i][j] moves to grid[i][j + 1].
//      Element at grid[i][n - 1] moves to grid[i + 1][0].
//      Element at grid[m - 1][n - 1] moves to grid[0][0].
//      Return the 2D grid after applying shift operation k times.

describe('渡された引数からにシフト操作を適用した2Dグリッドを返却する', () => {

    test('[[1,2,3],[4,5,6],[7,8,9]],1の引数を渡して[9,1,2],[3,4,5],[6,7,8]が返却される', () => {
        expect(shiftGrid([[1,2,3],[4,5,6],[7,8,9]],1))
            .toEqual(expect.arrayContaining([[9,1,2],[3,4,5],[6,7,8]]));
    });

    test('[[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]],4の引数を渡して[[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]が返却される', () => {
        expect(shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]],4))
            .toEqual(expect.arrayContaining([[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]));
    });

    test('[[1,2,3],[4,5,6],[7,8,9]],9の引数を渡して[[1,2,3],[4,5,6],[7,8,9]]が返却される', () => {
        expect(shiftGrid([[1,2,3],[4,5,6],[7,8,9]],9))
            .toEqual(expect.arrayContaining([[1,2,3],[4,5,6],[7,8,9]]));
    });
});